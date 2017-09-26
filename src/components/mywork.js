import React, {Component} from 'react';
import thatwork from "../data/thatwork"
import products from "./products"

class mywork extends Component {
  render() {
    const mywork = this.props.match.params.id
    console.log("mywork", mywork);
    let displaymywork =thatwork.map((result)=>{
      console.log("result",result.name);
      if (result.name === mywork ) {
        console.log("SAME");
        return(
          <mywork key={result.id} data={result} />
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
