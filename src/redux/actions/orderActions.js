import { ActionTypes } from "../constants/action-types"
export const selectedorder=(order)=>{
    return {
        type:ActionTypes.SELECTED_ORDER,
        payload:order,
    };
};