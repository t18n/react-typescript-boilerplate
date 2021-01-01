import React from 'react';
import { Header } from 'src/components/Header';
import Img from 'src/assets/photos/animals-1782013.svg';

import appStyles from 'src/styles/app.sass';
import { classes } from 'src/utils/common';

export const NotFound404 = () => (
  <div>
    <Header />

    <h1 className={classes([appStyles.box, appStyles.mt30])}>
      <img alt="" src={Img} width="500" />
      Too bad, page not found
    </h1>
  </div>
);
