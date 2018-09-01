import React from 'react'
import { Helmet } from 'react-helmet'
import Home from 'Containers/Home/Home';
import favicon from 'Assets/images/favicon.png'

class App extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <link rel="icon" type="image/png" href={favicon} />
        </Helmet>

        <Home />
      </div>
    );
  }
}

export default App