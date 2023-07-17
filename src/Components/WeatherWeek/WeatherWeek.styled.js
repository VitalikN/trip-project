import styled from '@emotion/styled';
export const Container = styled.div`
  padding-top: 30px;
`;
export const Box = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 70px;
`;

export const List = styled.ul`
  display: flex;
  gap: 15px;
  list-style: none;
  align-items: center;
`;

export const Item = styled.li`
  position: relative;

  cursor: pointer;
`;

export const Img = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 8px;
`;
export const BoxText = styled.div`
  position: absolute;
  left: 0px;
  bottom: 20px;
  width: 160px;
  height: 28px;
  display: flex;
  align-items: center;
  border-bottom-right-radius: 18px;
  border-top-right-radius: 18px;
  background-color: rgba(255, 255, 255, 0.6);

  line-height: 15px;
  letter-spacing: 0.04em;
`;

export const TitleCity = styled.h3`
  font-size: 12px;
  font-weight: 400;
  color: #535252;
  padding: 5px;
  line-height: 1.15;
`;
export const Text = styled.p`
  font-size: 10px;
  font-weight: 400;
  color: #656565;
  padding: 0 5px;
`;

export const Btn = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;

  width: 180px;
  height: 180px;

  padding: 10px 0px 11px 0px;

  align-items: center;
  border-radius: 8px;
  border: none;

  font-size: 14px;
  letter-spacing: 1.14;
  cursor: pointer;

  position: relative;
  overflow: hidden;
  transition: all 0.3s;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  &:before {
    content: '';
    position: absolute;
    width: 240%;
    height: 100%;

    background: linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 0)
    );
    top: 0;
    left: -250%;
    transform: rotate(45deg);
    transition: all 0.3s;
    opacity: 0;
  }

  &:hover,
  &:focus {
    transform: translateY(-2px);
    box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.2);
    animation: pulseAnimation 1s ease-in-out infinite;
  }

  &:hover:before,
  &:focus:before {
    left: 100%;
    opacity: 1;
    transition: left 2s ease-in-out, opacity 0.3s ease-in-out;
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  }
  @keyframes pulseAnimation {
    0% {
      transform: scale(1.03);
    }
    50% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.03);
    }
  }
`;

export const ListWeather = styled.ul`
  display: flex;
  gap: 15px;
  list-style: none;
  align-items: center;

  overflow-x: auto;
  padding-bottom: 10px;

  ::-webkit-scrollbar {
    width: 8px;
    height: 7px;
    display: flex;
    bottom: 10px;
    border-radius: 8px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background-color: #4678ee;
  }

  ::-webkit-scrollbar-track {
    @media screen and (min-width: 320px) {
      border-radius: 8px;
      background-color: #b7c8f5;
    }
  }
`;

export const TextTemp = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: #535252;
  padding: 5px 10px;
  line-height: 1.15;
`;
