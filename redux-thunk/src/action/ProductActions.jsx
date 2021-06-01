import {
  PRODUCTS_LOADING,
  PRODUCTS_LOADING_FAIL,
  PRODUCTS_LOADING_SUCCESS,
} from "../types/ProductTypes";
import axios from "axios";

const getProducts = () => {
  return async (dispatch) => {
    dispatch({
      type: PRODUCTS_LOADING,
      loading: false,
      message: "",
      products: [],
    });
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      console.log("This is the response", res);
      const { data } = res;
      dispatch({
        type: PRODUCTS_LOADING_SUCCESS,
        loading: true,
        message: "",
        products: data,
      });
    } catch (err) {
      dispatch({
        type: PRODUCTS_LOADING_FAIL,
        loading: true,
        message: err.message,
        products: [],
      });
    }
  };
};

export default getProducts;
