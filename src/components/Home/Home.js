import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Dashboard from './Dashboard';
import City from '../City/City';

import cloudIcon from '../../assets/img/cloud.svg';
import sunIcon from '../../assets/img/sun.svg';
import snowIcon from '../../assets/img/mist.svg';
import partcloudIcon from '../../assets/img/partcloud.svg';
import mistIcon from '../../assets/img/mist.svg';
import fogIcon from '../../assets/img/fog.svg';
import thunderIcon from '../../assets/img/thunder.svg';
import rainIcon from '../../assets/img/rain.svg';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city_data: [],
    }
  }

  componentDidMount() {
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

    // const { city_data } = this.props;
    // this.props.dispatch(getCurrentWeather)

  }

  handleWeatherIcon(id) {
    if (id > 800 && id < 900) {
      return (
        <img src={cloudIcon} />
      );
    } else if (id === 800) {
      return (
        <img src={sunIcon} />
      );
    } else if (id > 700 && id < 800) {
      return (
        <img src={fogIcon} />
      );
    } else if (id >= 600 && id < 700) {
      return (
        <img src={snowIcon} />
      );
    } else if (id >= 300 && id < 600) {
      return (
        <img src={rainIcon} />
      );
    } else if (id >= 200 && id < 300) {
      return (
        <img src={thunderIcon} />
      );
    }
  }

  render() {
    return (
      <div className="section-container">
      HEllo
        <section className="dashboard-wrapper" style={{ display: 'flex' }}>
          {this.state.city_data.map(city => {
            return (
              <Link key={city.id} to={`/${city.id}`} style={{ flex: 1 }}>
                <Dashboard city={city} handleWeatherIcon={this.handleWeatherIcon.bind(this)} />
              </Link>
            )
          })}
        </section>
      </div>
    );
  }
}


// Home.propTypes = {
//   city_data: PropTypes.array.isRequired,
// }
//
//
// const mapStateToProps = (state) => {
//   const {
//     city_data,
//   } = state.currentWeather;
//
//   return {
//     city_data,
//   }
// }
//
// const mapDispatchToProps = (dispatch) => {
//   return {
//     // dispatch: dispatch
//     // city_data: (data) => dispatch(getCurrentWeather(data)),
//     getCurrentWeather: () => dispatch(getCurrentWeather()),
//   }
// }
//
// // export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home))
// export default connect(mapStateToProps, mapDispatchToProps)(Home);
export default Home;
