import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {BrowserRouter, Route, Switch} from 'react-router-dom'
import BaseLayout from "./components/BaseLayout"
import About from "./components/About"
import Home from "./components/Home"
import showProduct from "./components/showProduct"
import Products from "./components/Products"
import Contact from './components/Contact'





ReactDOM.render(
  <BrowserRouter>
        <BaseLayout>
        <Switch>
        <Route path="/home" component={Home} />
        <Route exact path="/" component={About}/>
        <Route path="/contact" component={Contact} />
        <Route exact path="/products" component={Products}/>
        <Route path="/products/:id" component={showProduct}/>
        </Switch>
        </BaseLayout>
        </BrowserRouter>
        , document.getElementById('root'));
        registerServiceWorker();



  <App />, document.getElementById('root'));
registerServiceWorker();
