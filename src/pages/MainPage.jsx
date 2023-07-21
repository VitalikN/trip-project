import {   useEffect, useState } from 'react';
import { WeatherWeek } from '../Components/WeatherWeek/WeatherWeek';
import { daysOfWeek } from '../daysOfWeek';
import { Main,TitleTrip,TitleChip, ContainerWeek,ContainerData, TitleDay, Box, TitleCity,TextTemp, ContainerDay, StyledForm, StyledField,Sup, ChipIcon, Error,BoxLink, IconLinkedin, IconGithub, TitleDev} from './MainPage.styled';
import { useGetWeatherDataQuery } from '../redux/weatherApi';

import { Formik } from 'formik';
import { Timer } from '../Components/Timer/Timer';
import {icons} from '../icons'
import { AiOutlineSearch } from "react-icons/ai";
import { Loader } from '../Components/Loader/Loader';

import * as Yup from 'yup';
import { getDataFromLocalStorage, saveDataToLocalStorage } from '../Components/localStorage/localStorage';
import { nanoid } from 'nanoid';
import { Link } from 'react-router-dom';

const validationSchema = Yup.object().shape({
  searchTerm: Yup.string().required('Search term is required'),
});

const initialState = 
  {
    id: nanoid(),
    city: "uzhhorod",
    start: "2023-08-01",
    end: "2023-08-02",
  }



const MainPage = () => {
  const [weatherData, setWeatherData] = useState(() => getDataFromLocalStorage('weatherData', [initialState]))
const [dataCity, setDataCity] = useState(() => getDataFromLocalStorage('dataCity', initialState));
const [filteredWeatherData, setFilteredWeatherData] = useState([]);
const [search, setSearchTerm] = useState('');

const today = new Date();
const dayOfWeek = daysOfWeek[today.getDay()];



useEffect(() => {
  saveDataToLocalStorage('weatherData', weatherData);
  saveDataToLocalStorage('dataCity', dataCity);
}, [weatherData, dataCity]);


  const handleInputChange = (e) => {
    const { value } = e.target;
    setSearchTerm(value);
  
    const filteredData = weatherData.filter(({ city }) =>
      city.toLowerCase().includes(value.toLowerCase())
    );
  
    setFilteredWeatherData(filteredData);
  };



  const handleItemClick = (selectedData) => {
    setDataCity(selectedData);
  };
  const handleFormSubmit = (selectedData) => {
    setWeatherData((prevWeatherData) => ([...prevWeatherData, selectedData]));
    setDataCity(selectedData);
   
  };
  const { data, error, isLoading } = useGetWeatherDataQuery(dataCity.city, {
    skip: !dataCity.city,
  });
  

  return (
    <Main>
      <ContainerWeek>
        <TitleTrip>
          <TitleChip>Weather</TitleChip> Forecast
        </TitleTrip>
    {dataCity &&   <Formik
       initialValues={{ searchTerm: '' }}
       validationSchema={validationSchema}
>         
{({ handleChange, values }) => (
            <StyledForm>
              <StyledField
                type="text"
                name="searchTerm"
                placeholder='Search your trip'
                value={values.searchTerm}
                onChange={(e) => {
                  handleChange(e);
                  handleInputChange(e);
                }}
              />
              <ChipIcon >
              <AiOutlineSearch/>
              </ChipIcon>
            </StyledForm>
)}
        </Formik>}  
        <WeatherWeek
          handleItemClick={handleItemClick}
          handleFormSubmit={handleFormSubmit}
          weatherData={search ? filteredWeatherData : weatherData}
          dataCity={dataCity}
          filteredWeatherData={filteredWeatherData} 
        />
        <BoxLink>
      

        <Link to="https://github.com/VitalikN/trip-project" target="_blank">
  <IconGithub/>
</Link>
      <TitleDev>created by <span>&copy;</span> Vitaly Nozhenko</TitleDev> 
 
<Link to="https://www.linkedin.com/in/vitalii-nozhenko/" target="_blank">
<IconLinkedin/>
</Link>
        </BoxLink>
        
      </ContainerWeek>
      <ContainerDay>
          
        {dataCity && (
          isLoading ? (
          
            <Loader /> 
            ) : error ? (
              <Error>Error fetching weather data!</Error>
            ) : data ? (
              <>
              
              <TitleDay>{dayOfWeek}</TitleDay>
              <ContainerData>
                <Box>
                <img width='70px' height='70px' src={icons.find((i) => i.icon === data.days[0].icon)?.path}/>
          
              <TextTemp >
                { Math.ceil(data.days[0].temp)}
                <Sup >°C</Sup>
              </TextTemp>
              </Box>
            <TitleCity>
              {dataCity.city.charAt(0).toUpperCase() + dataCity.city.slice(1)}
            </TitleCity>

            </ContainerData>  
            <Timer dataCity={dataCity}/>
            </>):  (
            <Error>Weather data not available!</Error>
          )
          
          )}
      </ContainerDay>
     
    </Main>
  );
};
export default MainPage;
