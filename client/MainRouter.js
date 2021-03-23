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
import AdminPage from './user/AdminPage'
import PrivateRoute from './auth/PrivateRoute'
import Menu from './core/Menu'
const MainRouter = () => {
 return (<div>
 <Menu/>
 <Switch>
 <Route exact path="/" component={Home}/>
 <Route  path="/standings" component={Standings}/>
 <Route exact path="/fixtures/user/:userId" component={Fixtures}/>
 <Route path="/fixtures/:id/:home/:away/user/:userId" component={FixtureOdd}/>
 <Route path="/users" component={Users}/>
 <Route path="/signup" component={Signup}/>
 <Route path="/signin" component={Signin}/>
 <Route path="/adminPage" component={AdminPage}/>
 <PrivateRoute path="/user/edit/:userId" component={EditProfile}/>
 <Route path="/user/:userId" component={Profile}/>
 </Switch>
 </div>)
}
export default MainRouter