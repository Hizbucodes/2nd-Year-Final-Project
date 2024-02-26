import { CART_ACTIONS } from "../actions";

const INITIAL_STATE = {
    cart: [],
};

const cartReducer = (state, action) => {
    switch(action.type){
        case CART_ACTIONS.ADD_TO_CART:{
            return{
                ...state,
                cart: [...state.cart, {...action.payload, qty: 1}]
            }
        }

        
        case CART_ACTIONS.REMOVE_FROM_CART:{
            return{
                ...state,
                cart: state.cart.filter((c)=> c.id !== action.payload.id),
            }
        }

        case CART_ACTIONS.CHANGE_CART_QTY: {
            return{
                ...state, cart:state.cart.filter(c=> c.id=== action.payload.id ? c.qty=action.payload.qty : c.qty)
            }
        }

        default:{
            return state
        }
    };

};

export {cartReducer, INITIAL_STATE};