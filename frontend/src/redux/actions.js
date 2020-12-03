import { INNIT_APP, SHOW_lOADER, HIDE_LOADER } from "./types";

export function innitApp() {
  return async dispatch => {
    dispatch(showLoader());
    const response = await fetch('https://frozen-ridge-17191.herokuapp.com/api/products/');
    const json = await response.json();
    dispatch({ type: INNIT_APP, payload: json });
    dispatch(hideLoader());

  }
}

export function createProduct(product) {
  return async dispatch => {
    const response = await fetch('https://frozen-ridge-17191.herokuapp.com/api/product', {
      method: 'post',
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify(product)
    });
    const data = await response.ok;
    if (data) {
      dispatch(innitApp())
    }
  }
}

export function showLoader() {
  return {
    type: SHOW_lOADER
  }
}

export function hideLoader() {
  return {
    type: HIDE_LOADER
  }
}

export function removeProduct(id) {
  return async dispatch => {
    const response = await fetch('https://frozen-ridge-17191.herokuapp.com/api/product/' + id, { method: 'DELETE' });
    const data = await response.ok;
    if (data) {
      dispatch(innitApp())
    }
  }
}

export function updateProduct(data) {

  return async dispatch => {
    const response = await fetch('https://frozen-ridge-17191.herokuapp.com/api/product', {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify(data)
    });
    const update = await response.ok;
    if (update) {
      dispatch(innitApp())
    }
  }

}