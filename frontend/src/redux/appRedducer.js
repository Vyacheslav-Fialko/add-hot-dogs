import { HIDE_LOADER, SHOW_lOADER } from "./types"

const intializeState = {
  loding: false,
  isCreate: false
}

export const appReducer = (state = intializeState, action) => {
  switch (action.type) {
    case SHOW_lOADER:
      return { ...state, loading: true }
    case HIDE_LOADER:
      return { ...state, loading: false }
    default: return state
  }
}