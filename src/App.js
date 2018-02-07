import React, { Component } from 'react';
import axios from "axios"
import User from "./user"
import "./App.css"
import FrontPage from "./FrontPage"




export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      results: []
    }
    this.handleClick = this.handleClick.bind(this)

  }
  handleClick() {
    let results = [];
    if (this.state.active) {
      axios.get("https://randomuser.me/api/?results=1").then((d) => {
        results.push(d.data.results)
        this.setState({
          results: results
        })
      })
    } else {
      this.setState({
        active: !this.state.active
      });
      axios.get("https://randomuser.me/api/?results=1").then((d) => {
        results.push(d.data.results)
        this.setState({
          results: results
        })
      })
    }
  }



  render() {
    let users = this.state.results.map((i, ind) => {
      return <User name = {i[ind].name.first}
        picture = {i[ind].picture.large}
        phone = {i[ind].cell}
        email = {i[ind].email}
        login = {i[ind].login.username}
        password = {i[ind].login.password}
        address = {i[ind].location} />
    })
    return (
      <div className="container">
        <FrontPage click = {this.handleClick} active = {this.state.active} users={users}/>
    </div>)
  }
}

