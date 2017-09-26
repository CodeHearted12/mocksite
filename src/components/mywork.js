

import React, { Component } from 'react';
import '../styles/App.css';
import Features from './Features'
import myFeatures from '../Data/myFeature'
import characters from '../Data/characters'


class mywork extends Component {
  render() {
      let reinforce = {
        'color': '#000000',
        'textAlign': 'center',
        "paddingTop": "20px",
        "letterSpacing": 15
      }
      return(
      <div className="mywork_page">
        <div className="reinforce1">
          <div id="block"></div>
          <div><h2 style={reinforce}>Resources!</h2></div>
          <div id="block"></div>
        </div>
        <div className="mywork_items">
        {
            characters.map( (product) => <Features key={product.id} product={product} />)
          }
          </div>
            </div>
              )
            }
          }
          export default mywork;




//import React, {Component} from 'react';
//import thatwork from "./thatwork"

//import characters from './Data/characters'

//class mywork extends Component {
  //render() {
    //const mywork = this.props.match.params.id
    //console.log("mywork", mywork);
    //let displaymywork =characters.map((result)=>{
      //console.log("result",result.name);
      //if (result.name === mywork ) {
        //console.log("SAME");
        //return(
          //<mywork key={result.id} data={result} />
                  //)
                //}
              //}
            //)
            //return (
      //<div>
        //{displaymywork}
      //</div>
    //)
  //}
//}


//export default mywork;
