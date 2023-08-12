import React, {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import DatePicker, {registerLocale} from 'react-datepicker';
import ru from 'date-fns/locale/ru';
import {StepsLabelItem, StepsTableItem} from '../../models/stepsTableItem';
import {getFormattedDate} from '../../helpers/utils';

import 'react-datepicker/dist/react-datepicker.css';
import './StepsForm.css';

registerLocale('ru', ru);

interface StepsFormProps {
  labels: StepsLabelItem[];
  onSubmit: (item: StepsTableItem) => void;
}

const validationRules = {
  distance: '^(?=.+)(?:[1-9]\\d*|0)?(?:\\.\\d+)?$',
};

export const StepsForm = ({labels, onSubmit}: StepsFormProps) => {
  const [startDate, setStartDate] = useState(new Date());
  const [formData, setFormData] = useState({
    date: getFormattedDate(startDate),
    distance: '',
  });
  const [formValid, setFormValid] = useState({
    distance: false,
  });

  const resetForm = () => {
    setFormData({date: getFormattedDate(startDate), distance: ''});
    setFormValid({distance: false});
  };

  const getLabel = (key: string) => {
    const label = labels.find((label) => label.key === key);
    return label ? label.text : '';
  };

  const handleChangeDate = (date: Date | null) => {
    if (date) {
      setStartDate(date);
      setFormData((prevFormData) => ({...prevFormData, date: getFormattedDate(date)}));
    }
  };

  const handleChangeField = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    const pattern = new RegExp(validationRules[name as keyof typeof validationRules]);

    setFormData((prevFormData) => ({...prevFormData, [name]: value}));
    setFormValid((prevFormValid) => ({
      ...prevFormValid,
      [name]: pattern ? pattern.test(value) : true,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (Object.values(formValid).every((item) => item === true)) {
      onSubmit({id: uuidv4(), ...formData});
      resetForm();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="steps-form row align-items-end">
      <div className="col-12 col-md-4">
        <label htmlFor="dateInput" className="form-label">
          {getLabel('date')}
        </label>
        <DatePicker
          id="dateInput"
          dateFormat="dd.MM.yyyy"
          locale="ru"
          name="date"
          selected={startDate}
          className="form-control"
          onChange={(date) => handleChangeDate(date)}
        />
      </div>
      <div className="col-12 col-md-4">
        <label htmlFor="distanceInput" className="form-label">
          {getLabel('distance')}
        </label>
        <input
          id="distanceInput"
          type="number"
          name="distance"
          value={formData.distance}
          required
          onChange={handleChangeField}
          className={`form-control ${formValid.distance ? '' : 'is-invalid'}`}
          placeholder="Введите пройденную дистанцию"
        />
      </div>
      <div className="col-12 col-md-4">
        <button type="submit" className="btn btn-primary">
          Добавить
        </button>
      </div>
    </form>
  );
};
