import React from 'react';//eslint-disable-line
import "./shop-cart-table.css";

const ShopCartTable = () => {
  return (
    <div className="shop-cart-table">
      <h2>Your Order</h2>
      <table className="table">
        <thead>
          <th>#</th>
          <th>Item</th>
          <th>Count</th>
          <th>Price</th>
          <th>Action</th>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Site Realibility Engeneering</td>
            <td>2</td>
            <td>40</td>
            <td>
              <button className="btn btn-outline-danger">
                <i className="fa fa-trash-o"></i>
              </button>
              <button className="btn btn-outline-success">
                <i className="fa fa-plus-circle"></i>
              </button>
              <button className="btn btn-outline-warning">
                <i className="fa fa-minus-circle"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="total">Total: $201</div>
    </div>
  );
}
 
export default ShopCartTable;