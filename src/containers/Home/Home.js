import React from 'react'
import Helmet from "react-helmet";
import Header from 'Components/Header/Header';
import Gallery from 'Components/Gallery/Gallery';

class Home extends React.Component {
  state = {
    settings : {
      appName: "Turbo React Boilerplate"
    }
  }
  
  render() {
    return (
      <div>
        <Header appName={this.state.settings.appName} />
        <Gallery/>
      </div>
    );
  }
}

export default Home