import React from 'react';
import Header from 'src/components/Header/Header';
import Gallery from 'src/components/Gallery/Gallery';

class Home extends React.Component {
  state = {
    settings: {
      appName: 'React SASS Boilerplate',
    },
  }

  render() {
    return (
      <div>
        <Header appName={this.state.settings.appName} />
        <Gallery />
      </div>
    );
  }
}

export default Home;
