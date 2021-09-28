import { Route, BrowserRouter as Router } from 'react-router-dom' 

import React from 'react'

import portfolio from './Pages/portfolio';
import home from './Pages/home';
import service from './Pages/service';
import about from './Pages/about';
import contact from './Pages/contact';
import Default from './Default';
export default function App() {
  return (
    <div>
      <Route exact path="/" component={portfolio} />
      <Route exact path="/home" component={home} />
      <Route exact path="/service" component={service} />
      <Route exact path="/about" component={about} />
      <Route exact path="/contact" component={contact} />
      <Route exact component={Default} />


    </div>
  )
}
