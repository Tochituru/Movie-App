import React from 'react';
import Home from './containers/Home'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './commons/sass/index.scss'

const AppRouter = () => (
  <Router>
    <Route path={'/'} component={Home} />
    {/*Ejemplo: <Route path={'/users'} component={Users}/> 
    <Route exact path={'/users'} component={Users}/>
  */}
  </Router>
)


export default AppRouter;
