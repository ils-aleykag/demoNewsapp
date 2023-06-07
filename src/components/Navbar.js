import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  static propTypes = {
    prop: PropTypes
  }
  fetchData = (value) => {
    fetch("https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=b7f5be14ad1c4a52a87ff9fb848e7d75")
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
    })
  }
  handelChange = (value) => {
    this.setState(value)
    this.fetchData(value)
  }
  constructor(props){
    super(props);
    this.state = {
     search:""
    }
  }
  render() {
    return (
<div>
<nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">NewsApp</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/entertainment">Entertainment</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/health">Health</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/science">Science</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/sports">Sports</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/technology">Technology</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/business">Business</Link>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={this.state.sea
        } onChange={(e) => {this.handelChange({search: e.target.value});console.log(this.state.search); }}/>
        <button className="btn btn-outline-success" type="submit"  >Search</button>
      </form>
    </div>
  </div>
</nav>
</div>
)
}
}
