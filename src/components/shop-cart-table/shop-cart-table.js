import React from 'react';//eslint-disable-line
import { connect } from "react-redux";
import { bookIncrease, bookDecrease, bookDelete, bookAddedToCart } from "../../actions"; //eslint-disable-line
import "./shop-cart-table.css";

const ShopCartTable = ({ items, total, onIncrease, onDecrease, onDelete }) => {
  
  const renderRow = (item, idx) => {
    const { id, title, count, total } = item;
    return (
      <tr key={id}>
        <td>{idx}</td>
        <td>{title}</td>
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

const mapStateToProps = ({ shoppingCart: { cartItems, orderTotal } }) => {
  return {
    items: cartItems,
    total: orderTotal
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrease: (id) => {
      dispatch(bookAddedToCart(id))
    },
    onDecrease: (id) => {
      dispatch(bookDecrease(id))
    },
    onDelete: (id) => {
      dispatch(bookDelete(id))
    },
  }
}
 
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShopCartTable);