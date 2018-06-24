import React from 'react';

const Card = (props) => {
  const {
    city,
    handleWeatherIcon,
    handleBgColor,
  } = props;

  const weatherIcon = props.handleWeatherIcon(props.city.weather[0].id);
  return (
    <div className="card-box" style={{ background: props.handleBgColor(weatherIcon) }}>
      <div className="icon-box">
        <img src={weatherIcon} />
      </div>
      <div className="">
        <p>{Math.round(props.city.main.temp)}&#176; {props.city.weather[0].main}</p>
        <h1>{props.city.name}</h1>
      </div>
    </div>
  );
}

export default Card;
