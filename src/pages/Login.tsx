import React from 'react';
import { Header } from 'src/components/Header';

import appStyles from 'src/styles/app.sass';
import { classes } from 'src/utils/common';

export const Login = () => (
  <div>
    <Header />

    <form className={classes([appStyles.box, appStyles.mt30])}>
      <label htmlFor="email">
        Email address
        <input id="email" type="email" className={appStyles.inputForm} placeholder="Enter email" />
      </label>
      <label htmlFor="password">
        Password
        <input id="password" type="password" className={appStyles.inputForm} placeholder="Password" />
      </label>
      <button type="submit" className={appStyles.submitBtn}>Submit</button>
    </form>
  </div>
);
