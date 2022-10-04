import React from 'react'
import ReactDOM from 'react-dom'
import { Normalize } from 'styled-normalize'

import Router from './Router'


ReactDOM.render(
  <React.StrictMode>
    <Normalize />
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
)
