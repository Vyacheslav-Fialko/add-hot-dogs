import { INNIT_APP } from "./types"

const intializeState = {
  products: []
}

export const productsReducer = (state = intializeState, action) => {
  switch (action.type) {
    case INNIT_APP:
      return { ...state, products: action.payload }
    default: return state
  }
}