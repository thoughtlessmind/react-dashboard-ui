export const GENERAL = {
  TOGGLE_SIDE_DRAWER:'TOGGLE_SIDE_DRAWER'
}

const initialState={
  sideDrawerOpen:true
}

const generalReducer = (state=initialState, action) =>{
  switch (action.type) {
    case GENERAL.TOGGLE_SIDE_DRAWER:
      return {
        ...state,
        sideDrawerOpen:!state.sideDrawerOpen
      }
  
    default:
      return state
  }
}

export default generalReducer