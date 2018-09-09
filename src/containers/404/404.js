import React from 'react';
import Header from 'Components/Header/Header';
import Img from 'Assets/photos/animals-1782013.svg';

import appStyles from 'Sass/app.sass';
import { classes } from 'Includes/ultilities';

class NotFound404 extends React.Component {
  state = {
    settings: {
      appName: 'Turbo React Boilerplate',
    },
  }

  render() {
    return (
      <div>
        <Header appName={this.state.settings.appName} />

        <h1 className={classes([appStyles.box, appStyles.mt30])}>
          <img alt="" src={Img} width="500" />
          Too bad, page not found
        </h1>
      </div>
    );
  }
}
export default NotFound404;
