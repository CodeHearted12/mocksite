import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import '../styles/App.css';

class BaseLayout extends Component {

  render(){
    console.log("COUNT",this.props.count);
    return(
      <div>
            <div>
            <div className="baselayout">
            <div className="nav-bar">
                        <NavLink exact to="/"><img id="logo" src="http://i.imgur.com/wqlBeA3.png" alt="logo" height="70" width="100"/></NavLink>
                        <nav>
                        <NavLink exact to="/home" activeStyle={{"opacity": 1}}>Fate</NavLink>
                        <NavLink to="/products" activeStyle={{"opacity": 1}}>Weapons</NavLink>
                        <NavLink exact to="/"  activeStyle={{"opacity": 1}}>Spaceland</NavLink>
                        <NavLink to="/contact" activeStyle={{"opacity": 1}}>Contact</NavLink>
                        </nav>
                        <div id="shopping_cart">
                        {this.props.count}
                        <img src="http://www.icon100.com/up/4012/128/43-Shopping-cart-circle.png" alt="shopping_cart" height="50" width="50" />
                        </div>
                                  </div>
                                  <div className="header">
                                  <div className="title">
