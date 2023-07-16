import styled from '@emotion/styled';

import { AiOutlineClose } from 'react-icons/ai';
import { Form } from 'formik';

export const ModalContainer = styled.div`
  position: relative;
  padding: 20px;
  border-radius: 6px;
  background-color: #fff;
  @media screen and (max-width: 400px) {
    width: 85vw;
  }
  width: 350px;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 10px;
`;

export const AiClose = styled(AiOutlineClose)`
  font-size: 20px;
  cursor: pointer;
  &:hover,
  &:focus {
    transform: translateY(-2px);
    animation: aiClose 1s ease-in-out infinite;
  }
  @keyframes aiClose {
    0% {
      transform: scale(1.3);
    }
    50% {
      transform: scale(0.9);
    }
    100% {
      transform: scale(1.3);
    }
  }
`;

export const Chip = styled.span`
  position: absolute;
  left: 0;
  right: 0;
  border: 0.8px solid #a1a1a6bf;
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
`;

export const StyledSelect = styled.select`
  width: 100%;
  height: 49px;
  padding: 14px 18px;

  align-items: center;
  border-radius: 8px;
  border: none;
  opacity: 0.4;
  background-color: #fff;
  box-shadow: 0px 4px 16px 0px;
  font-size: 14px;
  letter-spacing: 1.14;
`;

export const BoxBtn = styled.div`
  display: flex;
  justify-content: end;
  gap: 5px;
  padding-top: 10px;
`;

export const Btn = styled.button`
  display: flex;
  justify-content: center;

  width: 150px;
  height: 49px;

  padding: 10px 0px 11px 0px;
  margin-top: 24px;

  align-items: center;
  border-radius: 8px;
  border: none;

  font-size: 14px;
  letter-spacing: -0.28px;
  cursor: pointer;

  position: relative;
  overflow: hidden;
  transition: all 0.3s;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  &:last-child {
    background-color: #4678ee;
    color: #fff;
    width: 120px;
  }

  &:before {
    content: '';
    position: absolute;
    width: 200%;
    height: 100%;
    background: linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 0)
    );
    top: 0;
    left: -100%;
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
      transform: scale(1.1);
    }
    50% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.1);
    }
  }
`;
/**calendar */

export const DatePickerWrapper = styled.div`
  padding-right: 20px;
  .react-datepicker__current-month {
    color: #161616;
    font-size: 16px;
    letter-spacing: -0.32px;
  }

  .react-datepicker {
    background: #ffffff;
    border-radius: 8px;
    border: 1px solid #4678ee;

    padding: 18px;
  }
  .react-datepicker-wrapper {
    display: inline-block;
    padding: 0;
    border: 0;
    width: 100%;
  }

  .react-datepicker__header {
    background: #ffffff;
    border: none;
  }

  .react-datepicker__navigation-icon--previous::before {
    border-color: #161616cc;
    width: 8px;
    height: 8px;
  }

  .react-datepicker__navigation-icon--next::before {
    border-color: #4678ee;
    width: 8px;
    height: 8px;
  }

  .react-datepicker__navigation--previous {
    top: 18px;
  }

  .react-datepicker__navigation--next {
    top: 18px;
  }

  .react-datepicker__day-names {
    margin-top: 14px;
    padding-top: 14px;
    border-top: 1px;
    border-top-color: #16161633;
    border-top-style: solid;
    display: flex;
    gap: 11px;
  }

  .react-datepicker__day-name {
    color: #16161680;
    font-size: 14px;

    letter-spacing: -0.28px;
    margin: 0px;
    width: 22px;
    height: 22px;
    margin-bottom: 11px;
  }

  .react-datepicker__day {
    color: #161616;
    font-size: 14px;
    line-height: 18px;

    letter-spacing: -0.28px;
    margin: 0px;
    min-width: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .react-datepicker__day:hover,
  .react-datepicker__day:focus {
    color: #161616;
    border-radius: 50%;
    background-color: #4678ee;
  }

  .react-datepicker__month {
    margin: 0px;
  }

  .react-datepicker__week {
    display: block;
    width: 22px;
    height: 22px;
    display: flex;
    gap: 11px;
  }

  .react-datepicker__week:not(:last-child) {
    margin-bottom: 11px;
  }

  .react-datepicker__day--selected {
    background-color: #4678ee;
    color: #161616;
    border-radius: 50%;
  }

  .react-datepicker__day--keyboard-selected {
    border-radius: 50%;
    background-color: inherit;
  }

  .react-datepicker__triangle {
    position: absolute;
    z-index: -1;
    opacity: 0;
  }

  .react-datepicker__day--selected:hover,
  .react-datepicker__day--selected:focus {
    background-color: #4678ee;
    color: #161616;
    border-radius: 50%;
  }

  .react-datepicker__day--disabled {
    color: #16161633;
  }

  .react-datepicker__day--disabled:hover,
  .react-datepicker__day--disabled:focus {
    background-color: #4678ee;
    color: #161616;
    border-radius: 50%;
  }

  .react-datepicker__input-container input {
    width: 100%;
    height: 49px;
    padding-left: 18px;

    align-items: center;
    border-radius: 8px;
    border: none;
    opacity: 0.4;
    background-color: #fff;
    box-shadow: 0px 4px 16px 0px;
    font-size: 14px;
    letter-spacing: 1.14;
  }
`;
