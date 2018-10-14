import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../css/Style.css';
import '../css/bootstrap.min.css';

class Rightcol extends Component {
  render() {
    return (
      <div className="col-lg-7 right-col">
        <div className="row my_row search-row">
          <div className="search">
            <i className="icon fa fa-search" ></i>
              <input id="search" type="text" placeholder="Search Item"/>
           </div>
        </div>

        <div className="row my_row food-menue">
          <div className="btn-group" role="group" aria-label="Basic example">

            <button type="button" className="btn menue-btn" id="radius-left">Food <div class=" arrow-up"></div></button>

            <button type="button" className="btn menue-btn">Beverage</button>
            <button type="button" className="btn menue-btn">Marchandise</button>
            <button type="button" className="btn menue-btn">Meal</button>
            <button type="button" className="btn menue-btn" id="radius-right"><i class="fa fa-bars"></i></button>
          </div>

        </div>
        <div className="row my_row food-menue">
          <div className="btn-group" role="group" aria-label="Basic example">
            <button type="button" className="btn food-btn" id="left">Breads</button>
            <button type="button" className="btn food-btn">Pastas</button>
            <button type="button" className="btn food-btn">Pizzas</button>
            <button type="button" className="btn food-btn" >Soups</button>
            <button type="button" className="btn food-btn" id="right"><i className="fa fa-bars"></i></button>
          </div>

        </div>
        <div class="row my_row container-buttons">
            <div class="buttons">
              <button type="button" className="btn button1-btn" >Pasta</button>
              <button type="button" className="btn button1-btn" >Pasta</button>
              <button type="button" className="btn button1-btn" >Pasta</button>
              <button type="button" className="btn button1-btn" >Pasta</button>
              <button type="button" className="btn button1-btn" >Pasta</button>
              <button type="button" className="btn button1-btn" >Pasta</button>
              <button type="button" className="btn button1-btn" >Pasta</button>
              <button type="button" className="btn button1-btn" >Pasta</button>
              <button type="button" className="btn button1-btn" >Pasta</button>
              <button type="button" className="btn button1-btn" >Pasta</button>
              <button type="button" className="btn button1-btn" >Pasta</button>
              <button type="button" className="btn button1-btn" >Pasta</button>
              <button type="button" className="btn button1-btn" >Pasta</button>
              <button type="button" className="btn button1-btn" >Pasta</button>
              <button type="button" className="btn button1-btn" >Pasta</button>
              <button type="button" className="btn button1-btn" >Pasta</button>
            </div>
          </div>





        </div>



    );
  }
}

export default Rightcol;
