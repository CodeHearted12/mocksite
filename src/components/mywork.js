import React, {Component} from 'react';
import thatwork from "../data/thatwork"
import Product from "./Product"

class mywork extends Component {
  render() {
    const product = this.props.match.params.id
    console.log("product", product);
    let displayProduct =thatwork.map((result)=>{
      console.log("result",result.name);
      if (result.name === product ) {
        console.log("SAME");
        return(
          <Product key={result.id} data={result} />
                  )
                }
              }
            )
            return (
      <div>
        {displayProduct}
      </div>
    )
  }
}


export default mywork;
