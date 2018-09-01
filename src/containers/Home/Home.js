import React from 'react'
import Header from 'Components/Header/Header';
import SinglePost from '../../components/SinglePost/SinglePost';

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
        <SinglePost/>
      </div>
    );
  }
}

export default Home