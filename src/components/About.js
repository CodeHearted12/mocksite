import React, { Component } from 'react';
import '../styles/App.css';
import products from '../Data/products'
import Features from './Features'



          class About extends Component {
            render() {
                let fierceTroops = {
                  'color': '#000000',
                  'textAlign': 'center',
                  "paddingTop": "20px",
                  "letterSpacing": 15
                }
                return(
                <div className="about_page">
                  <div className="allMyTroops">
                    <div id="block"></div>
                    <div><h2 style={fierceTroops}>Troops!</h2></div>
                    <div id="block"></div>
                  </div>
                  <div className="myTroops">
                  {
                      products.map( (product) => <Features key={product.id} product={product} />)
                    }
                    </div>
                      </div>
                        )
                      }
                    }
                    export default About;

                //<img id="about_img" src='http://s1.picswalls.com/wallpapers/2015/10/24/clash-of-clans-hd_121354350_284.jpg' alt="Clash of Clans" width="65%" height="400px" />
                //<img id="about_img" src='https://tse4.mm.bing.net/th?id=OIP.MH9w21HVJrqhRgJ_mSVT5QDsDj&pid=15.1&P=0&w=158&h=153'alt="Clash of Clans" width="44%" height="400px" />
                //<img id="about_img" src='https://tse3.mm.bing.net/th?id=OIP.r0wc62qb9JHoKdIB6ioCpQEREs&pid=15.1&P=0&w=300&h=300'alt="Clash of Clans" width="45%" height="400px" />
                //<img id="about_img" src='https://tse4.mm.bing.net/th?id=OIP.uVehN3jBfasnpqDHILzOcgEsEl&pid=15.1&P=0&w=171&h=169'alt="Clash of Clans" width="45%" height="400px" />
                //<img id="about_img" src='https://tse3.mm.bing.net/th?id=OIP.MXhPlDzEDw9JsdvwVQbMowDqEs&pid=15.1&P=0&w=300&h=300'alt="Clash of Clans" width="45%" height="400px" />
          //</div>
        //</div>
      //</div>
   //)
 //}
//}
//export default products;
