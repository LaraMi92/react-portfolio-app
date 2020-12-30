// == Import npm
import React from 'react';

import {
  BrowserRouter, // un composant global, qui doit englober toute notre appli
  Route, // composant capable d'afficher ses children selon une route
  Switch, // composant qui va nous permettre d'afficher une seule et unique route
  Redirect, // composant qui va nous permetre de redigier d'une URL à une autre.
} from 'react-router-dom';

// == Import
import './styles.scss';
import Header from 'src/components/Header';
import Videos from 'src/components/Videos';
import Images from 'src/components/Images';
import Home from 'src/components/Home';
import Footer from 'src/components/Footer';

// == Composant
const App = () => (
  <BrowserRouter>
    <div className="app">

      <Header />
      <Switch>

        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/videos">
          <Videos />
        </Route>
        <Route exact path="/images">
          <Images />
        </Route>
        {/*     <Route>
          <NotFound />
        </Route> */}
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
);

// == Export
export default App;
