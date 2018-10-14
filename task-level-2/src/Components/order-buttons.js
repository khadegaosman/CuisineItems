import React from 'react';
import plus from '../img/icons8-plus-24.png';
import multiply from '../img/icons8-multiply-filled-500 (1).png';
import flash from '../img/icons8-flash-on-96.png';
import perecentage from '../img/icons8-percentage-500.png';
import clock from '../img/icons8-clock-96 (1).png';
import dollar from '../img/icons8-us-dollar-96.png';
const OrderButtons = () =>{
	return 	                <div className="row last-btn-block  my_row">
                <div className="col-lg-3">
                  <button type="button"  className="  circle-bigger2">
                    <img className="delete" src={multiply} /><span id="last-span">Cancel Order</span>
                  </button>

                </div>
                <div className="col-lg-3">
                  <button type="button"  className="  circle-bigger2">
                    <img className="delete" src={perecentage} /><span id="last-span">Discount Order</span>
                  </button>

                </div>
                <div className="col-lg-3">
                  <button type="button"  className=" circle-bigger2  ">
                    <img className="delete" src={clock} /><span id="last-span">Hold Order</span>
                  </button>


                </div>
                <div className="col-lg-3">
                  <button type="button"  className=" circle-bigger2 " id="pay">
                    <img className="delete" src={dollar} /><span id="pay-span">Pay</span>
                  </button>
                </div>
              </div>
};

export default OrderButtons;
