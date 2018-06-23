import React, { Component } from 'react';

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.city.name}
      </div>
    )
  }
}

export default Dashboard;
