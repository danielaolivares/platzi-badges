import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Bagdes from '../pages/Badges';
import BadgeNew from '../pages/BadgeNew';

function App() {
  return(
    <BrowserRouter>
    <Switch>
    <Route exact path="/badges" component={Bagdes} />
    <Route exact path="/badges/new" component={BadgeNew} />
    </Switch>
    </BrowserRouter>
  )
}
export default App;