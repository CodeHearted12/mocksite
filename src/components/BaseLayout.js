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
                <NavLink exact to="/"><img id="logo" src="http://1.bp.blogspot.com/-sF5w2C-F_JA/VD5JCoKZwKI/AAAAAAAAOtQ/VExxymRdYJs/s1600/clash-of-clans-barbarian-icon-logo.png" alt="logo" height="70" width="100"/></NavLink>
                <nav>
                <NavLink exact to="/home" activeStyle={{"opacity": 1}}>Resources</NavLink>
                <NavLink to="/products" activeStyle={{"opacity": 1}}>Characters</NavLink>
                <NavLink exact to="/"  activeStyle={{"opacity": 1}}>Troops</NavLink>
                <NavLink to="/contact" activeStyle={{"opacity": 1}}>Contact</NavLink>
                </nav>
                <div id="shopping_cart">
                  {this.props.count}
                  <img src="http://www.icon100.com/up/4012/128/43-Shopping-cart-circle.png" alt="shopping_cart" height="50" width="50" />
                    </div>
                      </div>
                      <div className="header">
                      <div className="title">
                      <img id="zombies_logo" src="http://cocland.com/wp-content/uploads/2014/06/clash-of-clans-world.jpg" alt="logo" width="450"/>
                      </div>
                     </div>
                    </div>
                 <div style={{"background-color":"##88f7f2"}}>
                     {this.props.children}
                 </div>
                  </div>
                  <div className="footer">
                    <footer>Footer</footer>
                      </div>
                      </div>
                          )
                        }
                      }

                    export default (BaseLayout);
