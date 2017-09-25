import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import thatwork from "../data/thatwork"
let list = [];
for (var i = 0; i < thatwork.length; i++) {
  list.push(thatwork[i])
}
console.log("list",list);
class Thatwork extends Component {
  constructor(props){
    super(props)
    this.state={
      data:list
    }

    this.handleSubmit=this.handleSubmit.bind(this)
    this.handleClick=this.handleClick.bind(this)
  }
  handleClick(e){
    this.setState({
      data: []
    })

    console.log(e.target.value);
    list=[]
    for (var i = 0; i < thatwork.length; i++) {
      if (thatwork[i].weaponType===e.target.value) {
        list.push(thatwork[i])

      }
  }
  this.setState({
    data: list
  })
  console.log("STATE",this.state.data);
}

handleSubmit(e){
  e.preventDefault()
}
render(){
  return(
      <div>
        <div>
          <form className="select-box" onSubmit={this.handleSubmit}>
          <span><input type="checkbox" onChange={this.handleClick} name="SMG" value="SMG" />SMGS</span>
          <span><input type="checkbox" onChange={this.handleClick} name="LMG"  value="LMG" />LMGS</span>
                      <span><input type="checkbox" onChange={this.handleClick} name="ASSAULT RIFLE"  value="ASSAULT RIFLE" />ASSAULT RIFLE</span>
                      <span><input type="checkbox" onChange={this.handleClick} name="HANDGUN"  value="HANDGUN" />HANDGUNS</span>
                    </form>
                    </div>
                    <div>
                      {this.state.data.map((product)=>
                        <Link to={`/thatwork/${product.name}`} style={{ textDecoration: 'none' }}>
                        <div className="product_list" key={product.title}>
                          <h3 >{product.name}</h3>
                        <div className="product_detail">
                    <div>
                      <img src={product.img} alt={product.name} key={product.title} width="500" />
                    </div>
                  <div>
                    <h3>{product.title}</h3>
                    <h3>Price: {product.price}</h3>
                  </div>

                  </div>
                    </div>
                        </Link>
                      )}
                      </div>
                      </div>
                    )
                  }
                }
                export default thatwork;
