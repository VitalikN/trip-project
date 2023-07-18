import {  useState } from 'react';
import { WeatherWeek } from '../Components/WeatherWeek/WeatherWeek';
import { daysOfWeek } from '../daysOfWeek';
import { Main,TitleTrip,TitleChip, ContainerWeek,ContainerData, TitleDay, Box, TitleCity,TextTemp, ContainerDay, StyledForm, StyledField,Sup, Btn} from './MainPage.styled';
import { useGetWeatherDataQuery } from '../redux/weatherApi';

import { Formik } from 'formik';
import { Timer } from '../Components/Timer/Timer';
import {icons} from '../icons'
import { AiOutlineSearch } from "react-icons/ai";


const MainPage = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [dataCity, setDataCity] = useState('');

  const today = new Date();
  const dayOfWeek = daysOfWeek[today.getDay()];

  const handleItemClick = (selectedData) => {
    setDataCity(selectedData);
  };
  const handleFormSubmit = (selectedData) => {
    setWeatherData((prevWeatherData) => [...prevWeatherData, selectedData]);
    setDataCity(selectedData);
   
  };
  const { data, error, isLoading } = useGetWeatherDataQuery(dataCity.city, {
    skip: !dataCity.city,
  });

   console.log(dataCity);
  return (
    <Main>
      <ContainerWeek>
        <TitleTrip>
          <TitleChip>Weather</TitleChip> Forecast
        </TitleTrip>
        <Formik
          initialValues={{ searchTerm: '' }}
        >
         
            <StyledForm>
              <StyledField
                type="text"
                name="searchTerm"
                placeholder='Search your trip'
              
              />
              <Btn type="submit" >
              <AiOutlineSearch/>
              </Btn>
            </StyledForm>
          
        </Formik>
        <WeatherWeek
          handleItemClick={handleItemClick}
          handleFormSubmit={handleFormSubmit}
          weatherData={weatherData}
              dataCity={dataCity}
        />
      </ContainerWeek>
      <ContainerDay>
          
        {dataCity && (
          <>
            <TitleDay>{dayOfWeek}</TitleDay>
            
            {data && (
              <ContainerData>
                <Box>
                <img width='70px' height='70px' src={icons.find((i) => i.icon === data.days[0].icon)?.path}/>
          
              <TextTemp >
                {data.days[0].temp}
                <Sup >°C</Sup>
              </TextTemp>
              </Box>
            <TitleCity>
              {dataCity.city.charAt(0).toUpperCase() + dataCity.city.slice(1)}
            </TitleCity>

            </ContainerData>  )}

<Timer dataCity={dataCity}/>

          </>
        )}
      </ContainerDay>
    </Main>
  );
};
export default MainPage;
