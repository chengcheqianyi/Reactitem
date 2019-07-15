import React, {Component} from 'react'
import {BrowserRouter,HashRouter,Switch,Route}from 'react-router-dom'
import Login from './pages/login/Login.jsx'
import Admin from './pages/admin/Admin.jsx'
/*
应用根组件
 */
export default class App extends Component {

  

  render() {
    return (
      <HashRouter>
          <Switch>
            <Route path='/login' component={Login} />
            <Route path='/admin' component={Admin}/>
          </Switch>
      </HashRouter>
    )
  }
}


