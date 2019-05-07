
const initialState = {
  books: [],
  loading: true,
  errror: null,
  cartItems: [
    {
      id: 1,
      name: "Books_1",
      count: 3,
      total: 150
    }
  ],
  orderTotal: 220
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'FETCH_BOOKS_REQUESTED': {
      return {
        ...state,
        books: [],
        loading: true,
        error: null
      };
    }
    case 'FETCH_BOOKS_SUCCESS': {
      return {
        ...state,
        books: action.payload,
        loading: false,
        error: null        
      }
    };
    case 'FETCH_BOOKS_FAILURE': {
      return {
        ...state,
        books: [],
        loading: false,
        error: action.payload
      };
    };
    default: {
      return state;
    };
  }
}

export default reducer;