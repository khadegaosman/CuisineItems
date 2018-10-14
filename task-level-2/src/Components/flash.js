import React from 'react';
import plus from '../img/icons8-plus-24.png';
import flash from '../img/icons8-flash-on-96.png';
const Flash = () =>{
	return  <div>
    <div className="flash-block row my_row">
      <div className="col-lg-3">

        <button type="button"  className="  circle-bigger">
          <img className="flash-img" src={flash} /><span id="flash">Fast cash</span>
        </button>
      </div>
      <div className="col-lg-3">
        <div className="flash-details">
          <p className="flash-p1">Discounts: 0.00</p>
          <p className="flash-p1">Subcharges: 0.00</p>
          <p className="flash-p1">Tax: 0.00</p>
        </div>

      </div>
      <div className="col-lg-6">
        <div className="flash-details1">
          <p id="flash-p2">Total: 50.00</p>
          <p id="flash-p3">Balance due: 50.00</p>
        </div>
      </div>
    </div>
  </div>
};

export default Flash;
