import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './Components/Navbar/NavBar';


function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={NavBar} />
      </Switch>
    </BrowserRouter>
  )
}


export default Routes;

