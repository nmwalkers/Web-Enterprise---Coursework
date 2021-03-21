import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './core/Home'
import Users from './user/Users'
import Signup from './user/Signup'
import Signin from './auth/Signin'
import EditProfile from './user/EditProfile'
import Profile from './user/Profile'
import Standings from './core/Standings'
import Fixtures from './core/Fixtures'
import FixtureOdd from './core/FixtureOdd'
import PrivateRoute from './auth/PrivateRoute'
import Menu from './core/Menu'
const MainRouter = () => {
 return (<div>
 <Menu/>
 <Switch>
 <Route exact path="/" component={Home}/>
 <Route  path="/standings" component={Standings}/>
 <Route exact path="/fixtures" component={Fixtures}/>
 <Route path="/fixtures/:id" component={FixtureOdd}/>
 <Route path="/users" component={Users}/>
 <Route path="/signup" component={Signup}/>
 <Route path="/signin" component={Signin}/>
 <PrivateRoute path="/user/edit/:userId" component={EditProfile}/>
 <Route path="/user/:userId" component={Profile}/>
 </Switch>
 </div>)
}
export default MainRouter