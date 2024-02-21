import { FETCH_ACTIONS } from "../actions";

const INITIAL_VALUES = {
    product: [],
    loading: false,
    error: null,
}


const productReducer = (state, action) => {
    switch(action.type){
        case FETCH_ACTIONS.PROGRESS: {
            return{
                ...state,
                product: [],
                loading: true,
                error: false,
            };
        };
        case FETCH_ACTIONS.SUCCESS: {
            return{
                ...state,
                product: action.data,
                loading: false,
                error: false,
            };
        };

        case FETCH_ACTIONS.ERROR: {
            return{
                ...state,
                loading: false,
                error: action.error,
            };
        };
        default:{
            return state;
        }
    }
};

export {productReducer, INITIAL_VALUES};