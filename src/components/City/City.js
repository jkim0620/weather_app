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
      })

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
      </div>
    );
  }
}

export default City;
