import {
  PRODUCTS_LOADING,
  PRODUCTS_LOADING_FAIL,
  PRODUCTS_LOADING_SUCCESS,
} from "../types/ProductTypes";

const initialState = {
  loading: false,
  products: [],
  message: "",
};

const ProductReducer = (
  state = initialState,
  { type, loading, products, message },
) => {
  switch (type) {
    case PRODUCTS_LOADING:
    case PRODUCTS_LOADING_SUCCESS:
    case PRODUCTS_LOADING_FAIL:
      return {
        ...state,
        loading,
        products,
        message,
      };

      break;

    default:
      return state;
  }
};

export default ProductReducer;
