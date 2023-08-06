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

export const StepsForm = ({labels, onSubmit}: StepsFormProps) => {
  const [startDate, setStartDate] = useState(new Date());
  const [form, setForm] = useState({
    date: '',
    distance: 0,
  });

  const resetForm = () => {
    setForm({date: '', distance: 0});
  };

  const getLabel = (key: string) => {
    const label = labels.find((label) => label.key === key);
    return label ? label.text : '';
  };

  const handleChangeDate = (date: Date | null) => {
    console.log(date);
    if (date) {
      setStartDate(date);
      setForm((prevForm) => ({...prevForm, date: getFormattedDate(date)}));
    }
  };

  const handleChangeField = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setForm((prevForm) => ({...prevForm, [name]: value}));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({id: uuidv4(), ...form});
    resetForm();
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
          value={form.distance}
          required
          onChange={handleChangeField}
          className="form-control"
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
