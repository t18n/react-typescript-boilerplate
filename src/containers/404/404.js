import React from 'react';
import Header from 'src/components/Header/Header';
import Img from 'src/assets/photos/animals-1782013.svg';

import appStyles from 'src/styles/app.sass';
import { classes } from 'src/utils/common';

class NotFound404 extends React.Component {
  state = {
    settings: {
      appName: 'React SASS Boilerplate',
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
