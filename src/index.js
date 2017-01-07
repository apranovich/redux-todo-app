import 'babel-polyfill';

import React, { Component } from 'react'
import { render } from 'react-dom'
import store from './store/configure-store'
import { Root } from './components/Root'

render(
  <Root store={store} />, 
  document.getElementById('root')
);
