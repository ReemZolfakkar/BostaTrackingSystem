import { ActionTypes } from "../constants/action-types"
const initialState={
    order:[]
}
export const selectedorderReducer=(state=initialState,{type,payload})=>{
    switch(type)
      {
          case ActionTypes.SELECTED_ORDER:
              return {...state,order:payload};
           default:
              return  state;
      }
}