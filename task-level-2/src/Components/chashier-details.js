import React from 'react';

const CashierDetails = () =>{
	return 	    <div>
              <div className="details">
                  <p className="takeway_p1">Date: 16-07-2018</p>
                  <p className="takeway_p1">Hour: 12:53:53</p>
                  <p className="takeway_p1">Minimum Charge: 0.00</p>
              </div>
              <div className="takeway_num row my_row  ">
                <div className="col-lg-6">
                  <p className="takeaway_p2" id="num">Takeaway #100</p>
                  <p className="takeaway_p2" id="num2">Cahier: Ahmed Salem</p>
                </div>
                <div className="col-lg-6">
                  <div className="row">

                    <div className="col-lg-10">
                      <button className="takeway-btn" type="button">Customer Name</button>
                    </div>
                  </div>
                </div>
              </div>
              </div>
};

export default CashierDetails;
