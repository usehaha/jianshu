import * as constans from './constans'
// import { fromJS } from 'immutable'
const defaultState = {
  focused: false,
  list: [],
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case constans.CHANGE_LIST:
      return {
        list: action.data
      }
    case constans.SEARCH_FOCUS:
      return { focused: true }

    case constans.SEARCH_BLUR:

      return { focused: false, }

    default: return state;
  };



}