import { ActionTypes } from "../constants/action-types"
const initialState={
    order:[]
}
export const selectedorderReducer=(state={},{type,payload})=>{
      switch(type)
      {
          case ActionTypes.SELECTED_ORDER:
              return {...state,...payload}
              break;
      
           default:
              return  state;
      }
}