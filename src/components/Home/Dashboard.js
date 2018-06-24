import React from 'react';

const Dashboard = (props) => {
  const {
    city,
    handleWeatherIcon,
  } = props;

  return (
    <div className="card-wrapper">
      <div className="icon-box">
        {props.handleWeatherIcon(props.city.weather[0].id)}
      </div>
      <div className="">
        <p>{Math.round(props.city.main.temp)}&#176; {props.city.weather[0].main}</p>
        <h1>{props.city.name}</h1>
      </div>
    </div>
  );
}

export default Dashboard;
