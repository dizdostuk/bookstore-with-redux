
const updateCartItems = (cartItems, item, idx) => {
  if(item.count === 0) {
    return [
      ...cartItems.splice(idx, idx)
    ]
  }

  if(idx === -1) {
    return [
      ...cartItems,
      item
    ];
  }

  return [
    ...cartItems.slice(0, idx),
    item,
    ...cartItems.slice(idx+1)
  ];
};

const updateCartITem = (book, item = {}, quantity) => {
  const {
    id = book.id,
    title = book.title,
    count = 0,
    total = 0
  } = item;


  return {
    id,
    title,
    count: count + quantity,
    total: total + quantity * book.price
  }
};

const updateOrder = (state, bookId, quantity) => {
  const { bookList: {books}, shoppingCart: {cartItems} } = state;
  const book = books.find(({id}) => id === bookId);
  const itemIndex = cartItems.findIndex(({id}) => id === bookId);
  const item = cartItems[itemIndex];

  const newItem = updateCartITem(book, item, quantity);
  return {
    orderTotal: 0,
    cartItems: updateCartItems(cartItems, newItem, itemIndex)
  }
};

const updateShoppingCart = (state, action) => {
  if(state === undefined) {
    return {
      cartItems: [],
      orderTotal: 0
    };
  }
  switch(action.payload) {
    case 'BOOKS_ADDED_TO_CART': {
      return updateOrder(state, action.payload, 1);
    }
    case 'BOOK_DECREASE': {
      return updateOrder(state, action.payload, -1);
    }
    case 'BOOK_DELETE': {
      const item = state.shoppingCart.cartItems.find(({id}) => id === action.payload);
      //const item = state.cartItems[itemIndex];

      return updateOrder(state, action.payload, -item.count);
    }
    default: {
      return state.shoppingCart
    }
  }
};

export default updateShoppingCart;