import React from 'react';

interface WeatherProps {
  title: string;
  href: string;
}

export const Weather = ({title, href}: WeatherProps) => (
  <div className="card">
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <a
        className="weatherwidget-io"
        href={href}
        data-label_1=""
        data-label_2=""
        data-font="Roboto"
        data-icons="Climacons Animated"
        data-mode="Current"
        data-days="3"
        data-theme="pure"
      />
    </div>
  </div>
);
