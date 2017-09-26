import React, { Component } from 'react';
import '../styles/App.css';
class Contact extends Component {
  constructor(props){
    super(props);
      this.state={
        email: "codehearted12@gmail.com",
    phone: "407-675-1775",
    Location: "Orlando, FL"

  }
}
render() {
    return(
      <div className="contact_info">
             <div>{this.state.email}</div>
             <div>{this.state.phone}</div>
             <div>{this.state.Location}</div>
           </div>
         )
       }
     }
export default Contact;
