import {GENERAL} from './reducers'

export const toggleSideDrawer = () =>{
  return (dispatch)=>{
    dispatch({type: GENERAL.TOGGLE_SIDE_DRAWER})
  }
}