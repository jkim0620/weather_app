import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

let url = '';
let lastParam = 0;

class City extends Component {
  constructor(props) {
    super(props);

    this.state = {
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
    axios
    .get(`http://api.openweathermap.org/data/2.5/group?id=${lastParam}&units=imperial&APPID=b24113494e03ce028fba12dcd2298dda`)
    .then(response => {
      console.log(response.data.list[0]);
      const weatherData = response.data.list[0]
      this.setState({
        city_name: weatherData.name,
        temp: weatherData.main.temp,
        humidity: weatherData.main.humidity,
        temp_max: weatherData.main.temp_max,
        temp_min: weatherData.main.temp_min,
        desc: weatherData.weather[0].description,
      });
    })
    .catch(err => {
      console.log(err);
    });
  }

  render() {
    return (
      <div className="section-container">
        This is {this.state.city_name}
        <br />
        {this.state.temp}
        <br />
        {this.state.desc}
      </div>
    );
  }
}

export default City;
