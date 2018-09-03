import React from 'react'
import ReactDom from 'react-dom'

import 'bootstrap/dist/css/bootstrap.css'

import './sass/app.sass'
import Router from './routes';

ReactDom.render(<Router />, document.getElementById('root'));