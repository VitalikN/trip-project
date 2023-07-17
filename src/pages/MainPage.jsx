import { WeatherWeek } from '../Components/WeatherWeek/WeatherWeek';
import { daysOfWeek } from '../daysOfWeek';
import { Main, ContainerWeek, ContainerDay } from './MainPage.styled';

const MainPage = () => {
  const today = new Date();
  const dayOfWeek = daysOfWeek[today.getDay()];

  // const { data, error, isLoading } = useGetWeatherDataQuery(dataCity.city, {
  //   skip: !dataCity.city,
  // });

  return (
    <Main>
      <ContainerWeek>
        <h1>
          <span>Weather</span> Forecast
        </h1>
        <input type="text" />
        <WeatherWeek />
      </ContainerWeek>
      <ContainerDay>
        <h2>{dayOfWeek}</h2>
        {/* {dataCity && (
        {/* <p style={{ position: 'relative', top: '-0.5em' }}>
              {dataCity.days[0].feelslike}
              <sup style={{ fontSize: '0.9em' }}>°C</sup>
            </p>
            <h3>{dataCity.city}</h3> */}
        {/* )} */}
        Weather
      </ContainerDay>
    </Main>
  );
};
export default MainPage;
