
import './App.css';


import React from 'react'
import { Header } from './Header';
import Home from './Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Checkout from './Checkout';

const App = () => {
  return (
    <BrowserRouter>
    <div className='app'>
    <Header />
      <Switch>
        <Route path="/checkout">
          <Checkout/>
        </Route>
        <Route path="/">
        <Home />
        </Route>
      </Switch>
    </div>
  </BrowserRouter>
  )
}

export default App