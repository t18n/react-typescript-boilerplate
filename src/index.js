import React from 'react'
import ReactDom from 'react-dom'
import App from './components/App/app'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import './sass/app.sass'

ReactDom.render(<App/>, document.getElementById('root'));