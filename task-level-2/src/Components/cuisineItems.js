  import React, { Component } from 'react';
  import ReactDOM from 'react-dom';
  import '../css/bootstrap.min.css';
  import '../css/font-awesome.min.css';
  import '../css/Style.css';

  import cuisinelogo from '../img/cuisine.png';
  import Navbar from './nav-bar';
  import Leftcol from './left-col';
  import Rightcol from './right-col';



  class cuisineItems extends Component {
    render() {
      return (
        <div>
        <Navbar/>
        <div className="my_row second-row row ">
          <Leftcol/>
          <Rightcol/>
        </div>
        </div>



      );
    }
  }

  export default cuisineItems;
