import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../css/Style.css';
import '../css/bootstrap.min.css';
import plus from '../img/icons8-plus-24.png';
import flash from '../img/icons8-flash-on-96.png';
import CashierDetails from "./chashier-details";
import OrderButtons from "./order-buttons";
import Table from "./table";
import Flash from "./flash";



class Leftcol extends Component {
  render() {
    return (
      <div className="col-lg-5 left-col">
        <div className="takeway ">

          <div className="container">
              <CashierDetails/>
          </div>
          <Table/>
          <div className="last-block container">
            <div className="plus">
              <button type="button" name="button" className="circle  ">
                <img src={plus} /><span></span>
              </button>
            </div>
            <Flash/>
            <OrderButtons/>
          </div>
          </div>

      </div>

    );
  }
}

export default Leftcol;
