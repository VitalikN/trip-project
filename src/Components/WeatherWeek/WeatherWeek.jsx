import { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { useGetCustomWeatherDataQuery } from '../../redux/weatherApi';
import Modal from '../Modal/Modal';
import { Container, Btn, List, Item } from './WeatherWeek.styled';
// import * as images from '../images';
// console.log('====================================');
// console.log(images);
// console.log('====================================');

export const WeatherWeek = () => {
  const [dataCity, setDataCity] = useState('');
  const [weatherData, setWeatherData] = useState([]);

  const [showModal, setShowModal] = useState(false);

  const { data, error, isLoading } = useGetCustomWeatherDataQuery(
    {
      city: dataCity.city,
      start: dataCity.start,
      end: dataCity.end,
    },
    { skip: !dataCity.city ?? dataCity.star ?? dataCity.end }
  );
  console.log(data);

  const toggleModal = () => {
    setShowModal((prevShowModal) => !prevShowModal);
  };
  const handleFormSubmit = (selectedData) => {
    setDataCity(selectedData);
    setWeatherData((prevWeatherData) => [...prevWeatherData, selectedData]);
    setDataCity(selectedData);
  };

  console.log(dataCity);

  const handleItemClick = (selectedData) => {
    setDataCity(selectedData);
    console.log('====================================');
    console.log('click', dataCity);
    console.log('====================================');
  };

  return (
    <Container>
      <List>
        {weatherData.map(({ id, city, start, end }) => (
          <Item key={id} onClick={() => handleItemClick(dataCity)}>
            {/* <img src={images} alt={city} width="170px" height="170px" /> */}
            <h3> {city}</h3>
            <p>{start}</p>
            <p>{end}</p>
          </Item>
        ))}
      </List>
      <Btn onClick={toggleModal}>
        <AiOutlinePlus size={'20px'} />
        Add trip
      </Btn>
      {showModal && <Modal onClose={toggleModal} onSubmit={handleFormSubmit} />}
    </Container>
  );
};
