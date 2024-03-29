import { FILTER_ACTIONS } from "../actions";

const INITIAL_FILTER_STATE = {
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    searchQuery: "",
 
};

const filterProductReducer = (state, action) =>{
    switch(action.type){

        case FILTER_ACTIONS.SORT_BY_PRICE:{
            return{
                ...state, sort: action.payload
            }
        }

        case FILTER_ACTIONS.FILTER_BY_STOCK:{
            return{
                ...state, byStock: !state.byStock
            }
        }

        case FILTER_ACTIONS.FILTER_BY_DELIVERY:{
            return{
                ...state, byFastDelivery: !state.byFastDelivery
            }
        }

        case FILTER_ACTIONS.FILTER_BY_RATING:{
            return{
                ...state, byRating: action.payload
            }
        }


        case FILTER_ACTIONS.FILTER_BY_SEARCH:{
            return{
                ...state, searchQuery: action.payload 
            }
        }

        case FILTER_ACTIONS.CLEAR_FILTER:{
            return{
                byStock: false,
                byFastDelivery: false,
                byRating: 0,
                searchQuery: "",
            }
        }


        default:{
            return state;
        }
    }
}

export {filterProductReducer, INITIAL_FILTER_STATE}