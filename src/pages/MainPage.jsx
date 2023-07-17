import { useState } from 'react';
import { WeatherWeek } from '../Components/WeatherWeek/WeatherWeek';
import { daysOfWeek } from '../daysOfWeek';
import { Main, ContainerWeek, ContainerDay } from './MainPage.styled';
import { useGetWeatherDataQuery } from '../redux/weatherApi';

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

  console.log(weatherData);

  return (
    <Main>
      <ContainerWeek>
        <h1>
          <span>Weather</span> Forecast
        </h1>
        <input type="text" />
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
            <h2>{dayOfWeek}</h2>
            {data && (
              <p style={{ position: 'relative', top: '-0.5em' }}>
                {data.days[0].temp}
                <sup style={{ fontSize: '0.9em' }}>°C</sup>
              </p>
            )}
            <h3>
              {dataCity.city.charAt(0).toUpperCase() + dataCity.city.slice(1)}
            </h3>
          </>
        )}
      </ContainerDay>
    </Main>
  );
};
export default MainPage;
