import { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { useGetCustomWeatherDataQuery } from '../../redux/weatherApi';

import PropTypes from 'prop-types';

import Modal from '../Modal/Modal';
import cities from '../../cities';
import {
  Container,
  Box,
  Btn,
  List,
  Item,
  Img,
  BoxText,
  TitleCity,
  Text,
  ListWeather,
  TextTemp,
} from './WeatherWeek.styled';

// import * as images from '../images';
// console.log('====================================');
// console.log(images);
// console.log('====================================');

export const WeatherWeek = ({
  handleItemClick,
  handleFormSubmit,
  weatherData,
  dataCity,
}) => {
  //   const [weatherData, setWeatherData] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal((prevShowModal) => !prevShowModal);
  };

  //   const { data, error, isLoading } = useGetCustomWeatherDataQuery(
  //     {
  //       city: dataCity.city,
  //       start: dataCity.start,
  //       end: dataCity.end,
  //     },
  //     { skip: !dataCity.city ?? dataCity.start ?? dataCity.end }
  //   );
  //   console.log(weatherData);

  return (
    <Container>
      <Box>
        <List>
          {weatherData.map(({ id, city, start, end }) => (
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
      {/* {data && (
        <ListWeather>
          {data.days.map(({ datetime, tempmax, tempmin }, idx) => (
            <li key={idx}>
              <Text>
                {new Date(datetime).toLocaleString('en-US', {
                  weekday: 'long',
                })}
              </Text>
              svg
              <TextTemp>
                {tempmax}/{tempmin}
              </TextTemp>
            </li>
          ))}
        </ListWeather>
      )} */}
    </Container>
  );
};

WeatherWeek.propTypes = {
  handleItemClick: PropTypes.func.isRequired,
  handleFormSubmit: PropTypes.func.isRequired,
  weatherData: PropTypes.array.isRequired,
  //   //   dataCity: PropTypes.object.isRequired,
};
