import React from 'react';
import Home from './containers/Home'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const AppRouter = () => (
  <Router>
    <Route path={'/'} component={Home} />
    {/*Example: <Route path={'/users'} component={Users}/> 
    <Route exact path={'/users'} component={Users}/>
  */}
  </Router>
)


export default AppRouter;
