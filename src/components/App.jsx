import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from './Layout';
import Bagdes from '../pages/Badges';
import BadgeNew from '../pages/BadgeNew';
import NotFound from '../pages/NotFound';

function App() {
  return(
    <BrowserRouter>
    {/* para que se vea todo lo que esta dentro de layout hay un props que se llama children  */}
    <Layout>
    <Switch>
    <Route exact path="/badges" component={Bagdes} />
    <Route exact path="/badges/new" component={BadgeNew} />
    <Route component={NotFound} />
    </Switch>
    </Layout>
    </BrowserRouter>
  )
}
export default App;