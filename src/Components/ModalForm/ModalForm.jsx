import { ErrorMessage, Field, Formik } from 'formik';
import { date, object, string } from 'yup';
import PropTypes from 'prop-types';

import {
  ModalContainer,
  Box,
  Chip,
  StyledForm,
  StyledSelect,
  BoxBtn,
  Btn,
  AiClose,
  DatePickerWrapper,
} from './ModalForm.styled';

import cities from '../../cities';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { addDays, differenceInCalendarDays } from 'date-fns';

let tripSchema = object({
  city: string().required('City is a required field'),
  start: date().nullable().required('Start date is required'),
  end: date()
    .nullable(true)
    .required('End date is a required field')
    .test(
      'is-valid-range',
      'The difference between start and end dates cannot exceed 15 days',
      function (value) {
        const { start } = this.parent;
        if (!start || !value) {
          return true;
        }
        const diff = differenceInCalendarDays(value, start);
        return diff <= 15;
      }
    ),
});

const ModalForm = ({ onClose }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const initialValues = {
    city: '',
    start: null,
    end: null,
  };

  const handleSubmit = (values, { resetForm }) => {
    // Обробка події подачі форми
    console.log(values);
    resetForm();
    setStartDate(null);
    setEndDate(null);
    onClose();
  };
  const handleCancel = (resetForm) => {
    resetForm();
    setStartDate(null);
    setEndDate(null);
  };

  return (
    <ModalContainer>
      <Box>
        Create trip
        <AiClose onClick={onClose} />
      </Box>
      <Chip></Chip>
      <Formik
        validationSchema={tripSchema}
        onSubmit={handleSubmit}
        initialValues={initialValues}
      >
        {({ setFieldValue, resetForm }) => (
          <StyledForm>
            <label htmlFor="city">
              <span style={{ color: 'red', margin: '5px' }}>*</span>
              City
            </label>
            <Field name="city">
              {({ field }) => (
                <>
                  <StyledSelect
                    {...field}
                    placeholder="Please select a city"
                    onBlur={field.onBlur}
                  >
                    <option value="" disabled hidden>
                      Please select a city
                    </option>
                    {cities.map((city) => (
                      <option key={city.id} value={city.name}>
                        {city.name}
                      </option>
                    ))}
                  </StyledSelect>
                </>
              )}
            </Field>
            <ErrorMessage name="city" component="p" />

            <label htmlFor="start">
              <span style={{ color: 'red', margin: '5px' }}>*</span>
              Start date
            </label>
            <DatePickerWrapper>
              <DatePicker
                selected={startDate}
                onChange={(selectedDate) => {
                  setStartDate(selectedDate);
                  setFieldValue('start', selectedDate);

                  if (!endDate || endDate <= selectedDate) {
                    const newEndDate = addDays(selectedDate, 15);
                    setEndDate(newEndDate);
                    setFieldValue('end', newEndDate);
                  }
                }}
                minDate={new Date()}
                maxDate={addDays(new Date(), 15)}
                calendarStartDay={1}
                placeholderText="Select date"
              />
            </DatePickerWrapper>
            <ErrorMessage name="start" component="p" />

            <label htmlFor="end">
              <span style={{ color: 'red', margin: '5px' }}>*</span>
              End date
            </label>
            <DatePickerWrapper>
              <DatePicker
                selected={endDate}
                onChange={(selectedDate) => {
                  if (!startDate) {
                    alert('Please select a start date first');
                    return;
                  }

                  if (
                    selectedDate < startDate ||
                    selectedDate > addDays(startDate, 15)
                  ) {
                    alert('Invalid end date');
                    return;
                  }

                  setEndDate(selectedDate);
                  setFieldValue('end', selectedDate);
                }}
                minDate={startDate ? startDate : null}
                maxDate={startDate ? addDays(startDate, 15) : null}
                calendarStartDay={1}
                placeholderText="Select date"
              />
            </DatePickerWrapper>

            <ErrorMessage name="end" component="p" />
            <BoxBtn>
              <Btn
                type="button"
                onClick={() => {
                  handleCancel(resetForm);
                }}
              >
                Cancel
              </Btn>
              <Btn type="submit">Save</Btn>
            </BoxBtn>
          </StyledForm>
        )}
      </Formik>
    </ModalContainer>
  );
};
ModalForm.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default ModalForm;
