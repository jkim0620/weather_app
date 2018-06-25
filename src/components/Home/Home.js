import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Card from './Card';
import City from '../City/City';
import Nav from '../Base/Nav';
import Footer from '../Base/Footer';

import cloudIcon from '../../assets/img/cloud.svg';
import sunIcon from '../../assets/img/sun.svg';
import snowIcon from '../../assets/img/mist.svg';
import mistIcon from '../../assets/img/mist.svg';
import fogIcon from '../../assets/img/fog.svg';
import thunderIcon from '../../assets/img/thunder.svg';
import rainIcon from '../../assets/img/rain.svg';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city_data: [],
      bg_color: '',
      img_src: 0,
    }
  }

  componentDidMount() {
    const getWeatherData = () => {
      axios
      .get('http://api.openweathermap.org/data/2.5/group?id=5128638,3882428,1835848,6542283,2643743&units=imperial&APPID=b24113494e03ce028fba12dcd2298dda')
      .then(response => {
        this.setState({
          city_data: response.data.list,
        })
        console.log(this.state.city_data);
      })
      .catch(err => {
        console.log(err);
      });
    };

    // Get initial data
    getWeatherData();

    // Update weather data every 10 minutes
    setInterval(() => {
      getWeatherData();
    }, 600000);
  }

  // id represents the type of weather in the Openweathermap API
  // Render weather icon accordingly to weather id
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

  // CHange background color by weather
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
        <div className="section-container">
          <section className="card-container">
            {this.state.city_data.map(city => {
              return (
                <Link className="card-wrapper" key={city.id} to={{ pathname: `/${city.id}`, state: { handleBgColor: this.handleBgColor.bind(this), handleWeatherIcon: this.handleWeatherIcon.bind(this) } }}>
                  <Card city={city} handleBgColor={this.handleBgColor.bind(this)} handleWeatherIcon={this.handleWeatherIcon.bind(this)} />
                </Link>
              )
            })}
          </section>
        </div>
      </div>
    );
  }
}

export default Home;
