import styled from '@emotion/styled';

export const Btn = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;

  width: 170px;
  height: 170px;

  padding: 10px 0px 11px 0px;
  margin-top: 24px;

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
