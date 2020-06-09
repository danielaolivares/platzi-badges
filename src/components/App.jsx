import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from './Layout';
import Home from '../pages/Home';
import Bagdes from '../pages/Badges';
import BadgeNew from '../pages/BadgeNew';
import BadgeEdit from '../pages/BadgeEdit';
import BadgeDetails from '../pages/BadgeDetails';
import NotFound from '../pages/NotFound';


function App() {
  return(
    <BrowserRouter>
    {/* para que se vea todo lo que esta dentro de layout hay un props que se llama children  */}
    <Layout>
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/badges" component={Bagdes} />
    <Route exact path="/badges/new" component={BadgeNew} />
   <Route exact path="/badges/:badgeId" component={BadgeDetails} />
    <Route exact path="/badges/:badgeId/edit" component={BadgeEdit} />
    <Route component={NotFound} />
    </Switch>
    </Layout>
    </BrowserRouter>
  )
}
export default App;