import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {BrowserRouter, Route, Switch} from 'react-router-dom'
import BaseLayout from "./components/BaseLayout"
import About from "./components/About"
import Home from "./components/Home"
import thatwork from "./components/thatwork"
import Product from "./components/Product"
import Contact from './components/Contact'
import mywork from './components/mywork'




ReactDOM.render(
  <BrowserRouter>
        <BaseLayout>
        <Switch>
        <Route path="/home" component={Home} />
        <Route exact path="/" component={About}/>
        <Route path="/contact" component={Contact} />
        <Route exact path="/product" component={Product}/>
        <Route path="/product/:id" component={thatwork}/>
        <Route exact path="/products" component={mywork}/>
        </Switch>
        </BaseLayout>
        </BrowserRouter>
        , document.getElementById('root'));
        registerServiceWorker();



  <App />, document.getElementById('root');
registerServiceWorker();
