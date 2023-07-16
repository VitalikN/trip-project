import { useState } from 'react';
import Modal from '../Components/Modal/Modal';
import { Btn } from './MainPage.styled';

import { AiOutlinePlus } from 'react-icons/ai';

const MainPage = () => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(() => !showModal);
  };

  return (
    <section>
      <div>
        <h1>
          <span>Weather</span> Forecast
        </h1>
        <input type="text" />
        <Btn onClick={toggleModal}>
          <AiOutlinePlus size={'20px'} />
          Add trip
        </Btn>
        {showModal && <Modal onClose={toggleModal} />}
      </div>
      <div></div>
    </section>
  );
};
export default MainPage;
