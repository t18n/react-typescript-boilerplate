import React from 'react'
import Header from 'Components/Header/Header';

class Home extends React.Component {
  state = {
    settings : {
      appName: "Turbo React Boilerplate"
    }
  }
  
  render() {
    return (
      <Header appName={this.state.settings.appName} />
    );
  }
}

export default Home