import React from 'react'
import ReactDom from 'react-dom'
import Home from './containers/Home/Home'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import './sass/app.sass'

ReactDom.render(<Home />, document.getElementById('root'));