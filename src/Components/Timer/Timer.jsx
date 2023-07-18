import { useEffect, useState } from "react";

import PropTypes from 'prop-types';
import { Chip, Item, List } from "./Timer.styled";


export const Timer = ({dataCity})=>{
    const [remainingTime, setRemainingTime] = useState(0);

    useEffect(() => {
        if (dataCity.start) {
          const startDate = new Date(dataCity.start);
          const currentDate = new Date();
          const timeDifference = startDate.getTime() - currentDate.getTime();
          setRemainingTime(timeDifference);
    
          const interval = setInterval(() => {
            setRemainingTime((prevRemainingTime) => prevRemainingTime - 1000);
          }, 1000);
    
          return () => {
            clearInterval(interval);
          };
        }
      }, [dataCity.start]);

  const formatTime = (ms) => {
    const seconds = Math.floor((ms / 1000) % 60);
    const minutes = Math.floor((ms / 1000 / 60) % 60);
    const hours = Math.floor((ms / 1000 / 60 / 60) % 24);
    const days = Math.floor(ms / 1000 / 60 / 60 / 24);
  
    return (
        <List>
        <Item>{days} <Chip>DAYS</Chip></Item> 
        <Item>{hours} <Chip>HOURS</Chip></Item> 
        <Item>{minutes} <Chip>MINUTES</Chip></Item> 
        <Item>{seconds} <Chip>SECONDS</Chip></Item> 
        </List>
    )
    
    
  };
    return(     
        
        <>
        {remainingTime > 0 && (
        <>{formatTime(remainingTime)}</>
      )}
      </>);
}

Timer.propTypes = {
    dataCity: PropTypes.object.isRequired,
  };