import styled from '@emotion/styled';

import { Form, Field } from 'formik';


export const Main = styled.main`
  display: flex;
  height: 100vh;
`;

export const TitleTrip = styled.h1`
  font-size: 25px;
  font-weight: 600;
  line-height: 1.25;
  margin-bottom:30px ;
  `;

export const TitleChip = styled.span`
  font-weight: 300;`;

export const ContainerWeek = styled.div`
  padding: 40px;
  width: 60%;
`;
export const ContainerDay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40%;
  background-color: #110e3a;

`;
export const ContainerData = styled.div`

margin-bottom: 100px;
`;




export const Box = styled.div`
display: flex;
align-items:center;
justify-content: center;
gap: 5px;
margin: 10px 0;
`;

export const TitleDay = styled.h2`
  font-size: 30px;
  font-weight: 700;
  color: #fff;
  padding: 5px;
  line-height: 1.25;

`;
export const TitleCity = styled.h3`
  font-size: 25px;
  font-weight: 300;
  color: #fff;
  padding: 5px;
  line-height: 1.35;
  text-align: center;

`;
export const TextTemp = styled.p`
position: relative;
 font-size: 50px;
  font-weight: 400;
  color: #fff;
  padding: 5px;
  line-height: 1.35;
  `;
  export const Sup = styled.sup`
  position: absolute;
  top: -4px;
  font-size: 30px;
  font-weight: 300;
  `;


export const StyledForm = styled(Form)`
position: relative;

`;

export const StyledField = styled(Field)`
  padding: 14px 30px 14px 40px;

  align-items: center;
  border-radius: 8px;
  border: none;
  /* opacity: 0.4; */
  background-color: #f2f4f8;
  box-shadow: 0px 1px 10px 0px;
  font-size: 14px;
  letter-spacing: 1.14;
`;

export const Btn = styled.button`
position: absolute;
 left: 0;
 border: none;
    background: none;
    font-size: 20px;
    padding-top: 12px;
    padding-left: 15px;



`;