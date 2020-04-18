import { constans } from './../store'
import axios from 'axios'
export const searchFocus = () => ({
  type: constans.SEARCH_FOCUS
})
export const searchBlur = () => ({
  type: constans.SEARCH_BLUR
})
const changeList = (data) => ({

  type: constans.CHANGE_LIST,
  data
})
export const getList = () => {
  return (dispatch) => {
    axios.get('api/hearderList.json')
      .then((res) => {

        const data = res.data.data;
        dispatch(changeList(data))
      })
      .catch(() => {
        console.log("error")
      })
  }
}