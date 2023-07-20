/* eslint-disable react/prop-types */
  import {  useEffect, useState } from 'react';
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
    BoxArrow,
    ItemIcons,
    Text,
    ListWeather,
    TextTemp,
    Error,
    Dots,
    Dot,
    StyledArrowRight,
    StyledArrowLeft,
  } from './WeatherWeek.styled';
import { Loader } from '../Loader/Loader';

  export const WeatherWeek = ({
    handleItemClick,
    handleFormSubmit,
    weatherData,
    dataCity,
    filteredWeatherData,
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
    const sortedWeatherData = (filteredWeatherData.length > 0 ? [...filteredWeatherData] : [...weatherData]).sort(sortByDateAndCity);
  
    useEffect(() => {
      if (activeIndex >= sortedWeatherData.length) {
        setActiveIndex(0);
      }
    }, [filteredWeatherData,  sortedWeatherData.length]);    


    const { data, error, isLoading } = useGetCustomWeatherDataQuery(
      {
        city: dataCity.city,
        start: dataCity.start,
        end: dataCity.end,
      },
      { skip: !dataCity.city ?? dataCity.start ?? dataCity.end }
    );
    const [activeIndex, setActiveIndex] = useState(0);

    const handlePreviousClick = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? sortedWeatherData.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) => (prevIndex === sortedWeatherData.length - 1 ? 0 : prevIndex + 1));
  };
  
  const handleDotClick = (index) => {
    setActiveIndex(index);
  };


  
    return (
      <Container>
        <Box>
        <BoxArrow>
      {sortedWeatherData.length > 1 ?  <StyledArrowLeft  onClick={handlePreviousClick}/> : null} 
          <List>
            {sortedWeatherData.map(({ id, city, start, end }, index ) => (
              <Item
                key={id}
                onClick={() => handleItemClick({ city, start, end } )}
                style={{ display: index === activeIndex ? 'block' : 'none' }}
  
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
          {sortedWeatherData.length > 1 ?  <StyledArrowRight onClick={handleNextClick}/> : null}  

      <Dots>
        {sortedWeatherData.map((_, index) => (
          <Dot
            key={index}
            active={index === activeIndex}
            onClick={() => handleDotClick(index)}
      
          />
        ))}
      </Dots>
      </BoxArrow>
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
