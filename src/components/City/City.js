import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Nav from '../Base/Nav';
import Footer from '../Base/Footer';

import cloudIcon from '../../assets/img/cloud.svg';
import sunIcon from '../../assets/img/sun.svg';
import snowIcon from '../../assets/img/mist.svg';
import mistIcon from '../../assets/img/mist.svg';
import fogIcon from '../../assets/img/fog.svg';
import thunderIcon from '../../assets/img/thunder.svg';
import rainIcon from '../../assets/img/rain.svg';

let url = '';
let lastParam = 0;


class City extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      city_name: '',
      temp: 0,
      humidity: 0,
      temp_max: 0,
      temp_min: 0,
      desc: '',
    }
  }

  componentWillMount() {
    url = window.location.href;
    lastParam = url.substr(url.lastIndexOf('/') + 1);
    console.log(lastParam)
  }

  componentDidMount() {
    window.scrollTo(0,0);

    const getWeatherDetail = () => {
      axios
      .get(`http://api.openweathermap.org/data/2.5/group?id=${lastParam}&units=imperial&APPID=b24113494e03ce028fba12dcd2298dda`)
      .then(response => {
        console.log(response.data.list[0]);
        const weatherData = response.data.list[0]
        this.setState({
          id: weatherData.weather[0].id,
          city_name: weatherData.name,
          temp: weatherData.main.temp,
          humidity: weatherData.main.humidity,
          temp_max: weatherData.main.temp_max,
          temp_min: weatherData.main.temp_min,
          desc: weatherData.weather[0].description,
        });

        console.log(this.state.id);
      })
      .catch(err => {
        console.log(err);
      });
    };

    getWeatherDetail();

    // Update weather data every 10 minutes
    setInterval(() => {
      getWeatherDetail();
    }, 600000)
  }

  handleWeatherIcon(id) {
    if (id > 800 && id < 900) {
      return cloudIcon;
    } else if (id === 800) {
        return sunIcon;
    } else if (id > 700 && id < 800) {
      return fogIcon;
    } else if (id >= 600 && id < 700) {
      return snowIcon;
    } else if (id >= 300 && id < 600) {
      return rainIcon;
    } else if (id >= 200 && id < 300) {
      return thunderIcon;
    }
  }

  handleBgColor(icon) {
    if (icon === sunIcon) {
      return '#ffda26';
    } else if (icon === rainIcon || icon === snowIcon) {
      return '#4747e0';
    } else if (icon === cloudIcon) {
      return '#97caef';
    } else if (icon === thunderIcon) {
      return '#9a0cce';
    } else if (icon === fogIcon) {
      return '#09c6a4';
    }
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="section-container city-card-container" style={{ background: this.handleBgColor(this.handleWeatherIcon(this.state.id)) }}>
          <div className="city-card-box-1">
            <p className="temp">{Math.round(this.state.temp)}&#176; <span className="temp-detail">{Math.round(this.state.temp_min)}&#176; / {Math.round(this.state.temp_max)}&#176;</span></p>
            <p className="city-name">{this.state.city_name}</p>
          </div>
          <div className="city-card-box-2">
            <div className="icon-box">
              <img src={this.handleWeatherIcon(this.state.id)} />
            </div>
            <div className="desc-box">
              <span className="capitalize">{this.state.desc}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default City;
