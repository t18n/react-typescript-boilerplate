import React from 'react'
import Header from 'Components/Header/Header';

class Login extends React.Component {
  state = {
    settings: {
      appName: "Turbo React Boilerplate"
    }
  }

  render() {
    return (
      <div>
        <Header appName={this.state.settings.appName} />

        <form className="container mt-4">
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" placeholder="Enter email" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" placeholder="Password" />
          </div>
          <button type="submit" className="btn btn-primary mt-3">Submit</button>
        </form>
      </div>
    );
  }
}

export default Login