import React, { Component } from 'react'
import "./App.css"

export default class User extends Component {
  render() {
    return (
      <div className="card">
            <img src={this.props.picture} alt={this.props.name} className = "userPhoto"/>
        <div className="bioInfo">
            <div className="bioCol1">
                <p>Name: {this.props.name}</p>
                <p>Email: {this.props.email}</p>
                <p>Phone Number: {this.props.phone} </p>
            </div>
            <div className="BioCol2">
                <p>Address: {this.props.address.street} {this.props.address.state} {this.props.address.postcode} </p>
                <p>Password: {this.props.password}</p>
                <p>User name: {this.props.login} </p>
            </div>
        </div>
    </div>
    )
  }
}