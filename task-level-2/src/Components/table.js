import React from 'react';

const Table = () =>{
	return <div>
    <div className="table container">
      <p id="table1">Qty</p>
      <p id="table1">Item</p>
      <p id="table2">Size</p>
      <p id="table2">Each</p>
      <p id="table2">Total</p>
    </div>
    <div className="order">
      <p className="takeway_p1" id="status">No items currently in order</p>
    </div>
  </div>
};

export default Table;
