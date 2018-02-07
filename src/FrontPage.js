import React, { Component } from "react"
import { CSSTransition, transit } from "react-css-transition";


export default class FrontPage extends Component {


  render() {

    return (
      <div className="landingPage">
                 <h1>Random User Generator</h1>
                    {this.props.users}
                 <button className="newUser" onClick = {this.props.click}>Click me to generate a new person</button>
            </div>

    )
  }
}