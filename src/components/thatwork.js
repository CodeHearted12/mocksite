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
