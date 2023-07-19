/* eslint-disable react/prop-types */
  import { useState } from 'react';
  import { AiOutlinePlus } from 'react-icons/ai';
  import { useGetCustomWeatherDataQuery } from '../../redux/weatherApi';

  import PropTypes from 'prop-types';

  import Modal from '../Modal/Modal';
  import cities from '../../cities';
  import {icons} from '../../icons'
  import {
    Container,
    Box,
    Btn,
    List,
    Item,
    Img,
    BoxText,
    TitleCity,
    
    ItemIcons,
    Text,
    ListWeather,
    TextTemp,
    Error,
  } from './WeatherWeek.styled';
import { Loader } from '../Loader/Loader';

  export const WeatherWeek = ({
    handleItemClick,
    handleFormSubmit,
    weatherData,
    dataCity,
  }) => {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
      setShowModal((prevShowModal) => !prevShowModal);
    };
    const sortByDateAndCity = (a, b) => {
      const dateA = new Date(a.start);
      const dateB = new Date(b.start);
    
      if (dateA.getTime() !== dateB.getTime()) {
        return dateA - dateB;
      } else {
        return a.city.localeCompare(b.city, 'en', { sensitivity: 'base' });
      }
    };
    const sortedWeatherData = [...weatherData].sort(sortByDateAndCity);

        
    const { data, error, isLoading } = useGetCustomWeatherDataQuery(
      {
        city: dataCity.city,
        start: dataCity.start,
        end: dataCity.end,
      },
      { skip: !dataCity.city ?? dataCity.start ?? dataCity.end }
    );

    return (
      <Container>
        <Box>
          <List>
            {sortedWeatherData.map(({ id, city, start, end }) => (
              <Item
                key={id}
                onClick={() => handleItemClick({ city, start, end })}
              >
                <Img
                  src={cities.find((image) => image.name === city)?.path}
                  alt={city}
                />
                <BoxText>
                  <TitleCity>
                    {city.charAt(0).toUpperCase() + city.slice(1)}
                  </TitleCity>
                  <Text>
                    {`${start.split('-')[2]}.${start.split('-')[1]}.${
                      start.split('-')[0]
                    }`}
                    -
                    {`${end.split('-')[2]}.${end.split('-')[1]}.${
                      end.split('-')[0]
                    }`}
                  </Text>
                </BoxText>
              </Item>
            ))}
          </List>
          <Btn onClick={toggleModal}>
            <AiOutlinePlus size={'20px'} />
            Add trip
          </Btn>
        </Box>
        {showModal && <Modal onClose={toggleModal} onSubmit={handleFormSubmit} />}
        {data && (
   isLoading ? (
    <Loader />
  ) : error ? (
    <Error>Error fetching weather data!</Error>
  ) : data ? (


          <ListWeather>
            {data.days.map(({ datetime, tempmax, tempmin ,icon}, idx) => (
              <ItemIcons key={idx}>
                <Text>
                  {new Date(datetime).toLocaleString('en-US', {
                    weekday: 'long',
                  })}
                </Text>
                <img width='60px' height='60px' src={icons.find((i) => i.icon === icon)?.path}/>
                <TextTemp>
                  {Math.ceil(tempmax)}/{Math.ceil(tempmin)}
                </TextTemp>
              </ItemIcons>
            ))}
          </ListWeather>
        ) : null)}
      </Container>
    );
  };

  WeatherWeek.propTypes = {
    handleItemClick: PropTypes.func.isRequired,
    handleFormSubmit: PropTypes.func.isRequired,
    weatherData: PropTypes.array.isRequired,
  };
