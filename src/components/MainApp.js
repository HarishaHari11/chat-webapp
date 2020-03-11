import React from 'react'
import {Route,Link,BrowserRouter as Router} from 'react-router-dom'
import Home from "./Home"

function MainApp(){
          return(
                    <Router>
                    <Route path="/" component={Home}></Route>
          </Router>
          )
     
}
export default MainApp

