import React, {useEffect, useState} from 'react';
import {convertToRGB} from '../../helpers/utils';
import './ConverterColorsForm.css';

interface ConverterColorsFormProps {
  changeBgColor: (value: string) => void;
}

interface IConverterColorsForm {
  hexColor: string;
  rgbColor: string;
}

const patternHexColor = new RegExp('^#[a-fA-F0-9]{6}$');
const errorColor = '#e94b35';

export const ConverterColorsForm = ({changeBgColor}: ConverterColorsFormProps) => {
  const [form, setForm] = useState<IConverterColorsForm>({
    hexColor: '',
    rgbColor: '',
  });

  const getRGBColor = (hexColor: string) => {
    if (!hexColor) return '';
    if (patternHexColor.test(hexColor)) {
      const RGBColors = convertToRGB(hexColor.replace('#', ''));
      return `rgb(${RGBColors[0]}, ${RGBColors[1]}, ${RGBColors[2]})`;
    } else return hexColor.length > 6 ? 'Incorrect format' : '';
  };

  useEffect(() => {
    if (!form.hexColor) changeBgColor('transparent');
    if (patternHexColor.test(form.hexColor)) changeBgColor(form.hexColor);
    else if (form.hexColor.length > 6) changeBgColor(errorColor);
  }, [form]);

  const handleChangeHexColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;

    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
      rgbColor: getRGBColor(value),
    }));
  };

  return (
    <div className="converter-colors-form d-flex flex-column">
      <input
        type="text"
        name="hexColor"
        className="mb-1"
        value={form.hexColor}
        onChange={handleChangeHexColor}
        placeholder="#000000"
      />
      <input name="rgbColor" value={form.rgbColor} readOnly />
    </div>
  );
};
