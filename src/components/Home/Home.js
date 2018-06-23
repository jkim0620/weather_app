import React, { Component } from 'react';
import Dashboard from './Dashboard';
import axios from 'axios';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city_data: [],
    }
  }

  componentDidMount() {
    axios
    .get('http://api.openweathermap.org/data/2.5/group?id=5128638,3882428,1835847,6542283,2643743&units=imperial&APPID=b24113494e03ce028fba12dcd2298dda')
    .then(response => {
      console.log(response.data.list[0].name);
      this.setState({
        city_data: response.data.list,
      })
      console.log(this.state.city_data);
    })
    .catch(err => {
      console.log(err);
    });

  }

  render() {
    return (
      <div>
        {this.state.city_data.map(city => {
          return (
            <Dashboard key={city.id} city={city} />
          )
        })}
      </div>
    );
  }
}

export default Home;
