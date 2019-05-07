import React from 'react';//eslint-disable-line
import { connect } from "react-redux";
import "./shop-cart-table.css";

const ShopCartTable = ({ items, total, onIncrease, onDecrease, onDelete }) => {
  
  const renderRow = (item, idx) => {
    const { id, name, count, total } = item;
    return (
      <tr key={id}>
        <td>{idx}</td>
        <td>{name}</td>
        <td>{count}</td>
        <td>{total}</td>
        <td>
          <button
            onClick={() => onIncrease(id)}
            className="btn btn-outline-success">
            <i className="fa fa-plus-circle"></i>
          </button>
          <button
            onClick={() => onDecrease(id)}
            className="btn btn-outline-warning">
            <i className="fa fa-minus-circle"></i>
          </button>
          <button
            onClick={() => onDelete(id)}
            className="btn btn-outline-danger">
            <i className="fa fa-trash-o"></i>
          </button>
        </td>
      </tr>
    );
  };
  return (
    <div className="shop-cart-table">
      <h2>Your Order</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            items.map(renderRow)
          }
        </tbody>
      </table>

      <div className="total">Total: ${total}</div>
    </div>
  );
};

const mapStateToProps = ({ cartItems, orderTotal }) => {
  return {
    items: cartItems,
    total: orderTotal
  };
};

const mapDispatchToProps = () => {
  return {
    onIncrease: (id) => {
      console.log(`Increase ${id}`)
    },
    onDecrease: (id) => {
      console.log(`Decrease ${id}`)
    },
    onDelete: (id) => {
      console.log(`Delete ${id}`)
    },
  }
}
 
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShopCartTable);