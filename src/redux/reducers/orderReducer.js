import { ActionTypes } from "../constants/action-types"
const initialState={
    order:[]
}
export const selectedorderReducer=(state=initialState,{type,payload})=>{
    console.log(type)
    console.log(payload)

    switch(type)
      {
          case ActionTypes.SELECTED_ORDER:
              return {payload};
           default:
              return  state;
      }
}