import React from 'react';//eslint-disable-line
import BookList from "../book-list";//eslint-disable-line
import ShopCartTable from '../shop-cart-table/shop-cart-table';//eslint-disable-line

const HomePage = () => {
  return (
    <div>
      <BookList />
      <ShopCartTable />
    </div>
  );
}
 
export default HomePage;