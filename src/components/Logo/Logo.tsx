import React from 'react';
import logo from '../../assets/img/yandex_logo_en.svg';
import './Logo.scss';

export const Logo = () => (
  <a href="#" className="d-block">
    <figure className="logo d-flex align-center justify-center">
      <img src={logo} alt="logotype" className="logo__img" />
    </figure>
  </a>
);
