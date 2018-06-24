import React from 'react';

const Card = (props) => {
  const {
    city,
    handleWeatherIcon,
    handleBgColor,
  } = props;

  const weatherIcon = props.handleWeatherIcon(props.city.weather[0].id);
  return (
    <div>
      <div className="card-box" style={{ background: props.handleBgColor(weatherIcon) }}>
        <div className="overlay"></div>
        <div className="icon-box">
          <img src={weatherIcon} />
        </div>
        <div className="desc-box">
          <p className="temp">{Math.round(props.city.main.temp)}&#176;</p>
          <p className="desc">{props.city.weather[0].main}</p>
          <p className="name">{props.city.name}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
