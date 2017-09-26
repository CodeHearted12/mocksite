import React, { Component } from 'react';
import '../styles/App.css';
import Features from './Features'
import myFeatures from '../Data/myFeature'



class Home extends Component {
  render() {
      let feature_title = {
        'color': '#000000',
        'textAlign': 'center',
        "paddingTop": "20px",
        "letterSpacing": 15
      }
      return(
      <div className="home_page">
        <div className="popular_items">
          <div id="block"></div>
          <div><h2 style={feature_title}>Resources!</h2></div>
          <div id="block"></div>
        </div>
        <div className="home_items">
        {
            myFeatures.map( (product) => <Features key={product.id} product={product} />)
          }
          </div>
            </div>
              )
            }
          }
          export default Home;
