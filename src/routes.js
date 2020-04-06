import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Page1 from './Components/Page1/Page1';
import Page2 from './Components/Page2/Page2';


function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Page1} />
        <Route path='/page2' exact component={Page2} />
      </Switch>
    </BrowserRouter>
  )
}


export default Routes;

