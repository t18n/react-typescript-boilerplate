import React from 'react'
import Header from 'Components/Header/Header';

import appStyles from 'Sass/app.sass'
import { classes } from 'Includes/ultilities';

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

        <form className={classes([appStyles.box, appStyles.mt30])}>
          <div>
            <label>Email address</label>
            <input type="email" className={appStyles.inputForm} placeholder="Enter email" />
          </div>
          <div className="">
            <label>Password</label>
            <input type="password" className={appStyles.inputForm} placeholder="Password" />
          </div>
          <button type="submit" className={appStyles.submitBtn}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Login