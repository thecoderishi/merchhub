import React from 'react'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import Home from './core/Home'
import Tshirt from './core/Tshirt'
import MobileCover from './core/MobileCover'
import NotFoundPage from './core/NotFoundPage'

const Routes = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path='/' exact component={Home} />
        <Route exact path='/tshirt' exact component={Tshirt} />
        <Route exact path='/mobilecover' exact component={MobileCover} />
        <Route exact path='/404' component={NotFoundPage} />
        <Redirect exact to='/404' />
      </Switch>
    </HashRouter>
  )
}

export default Routes
