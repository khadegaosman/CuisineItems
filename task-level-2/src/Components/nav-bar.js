import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../css/Style.css';
import '../css/bootstrap.min.css';
import cuisinelogo from '../img/cuisine.png';

class Navbar extends Component {
  render() {
    return (
      <div className="my_row row">
        <div className="col-lg-5 ">
            <div className="col-lg-3">
              <img className="img-fluid" src={cuisinelogo} alt=""/>
            </div>
        </div>
        <div className="col-lg-7">
          <div className="row my_row">
            <button className=" nav-btn" type="button">Bussiness Day </button>
            <div className=" dropdown">
              <button className="  nav-btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown button
              </button>

            </div>
            <button className=" nav-btn" type="button">Orders Queue </button>
            <button className="  nav-btn" type="button">Admin </button>

          </div>
        </div>
      </div>

    );
  }
}

export default Navbar;
