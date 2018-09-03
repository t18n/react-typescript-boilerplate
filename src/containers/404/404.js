import React from 'react'
import Header from 'Components/Header/Header';
import Img from 'Assets/photos/animals-1782013.svg'

class NotFound404 extends React.Component {
  state = {
    settings: {
      appName: "Turbo React Boilerplate"
    }
  }
  
  render() {
    return (
      <div>
        <Header appName={this.state.settings.appName} />
        
        <h1 className="container mt-4">
          <img alt='' src={Img} className="img-responsive" width='500' />
          Too bad, page not found
        </h1>
      </div>
    );
  }
}
export default NotFound404