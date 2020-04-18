import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from "./common/header"
import store from './store'
import Home from './pages/home'
import Detail from './pages/detail'
export default class App extends Component {
  render () {
    return (
      <div>
        <Provider store={store}>
          <Header />
        </Provider>
        <BrowserRouter>
          <div>
            <Route path='/' exact component={Home}></Route>
            <Route path='/detail' exact component={Detail}></Route>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}
