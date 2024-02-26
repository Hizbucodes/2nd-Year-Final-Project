import { createContext, useReducer } from "react";
import { INITIAL_STATE, cartReducer } from "../reducers/cartReducer";
import { filterProductReducer, INITIAL_FILTER_STATE } from "../reducers/filterProductReducer";

const CartContext = createContext({});

export const CartProvider = ({children}) =>{

    const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);

    const[stateFilter, dispatchFilter] = useReducer(filterProductReducer, INITIAL_FILTER_STATE);

    return(
        <CartContext.Provider value={{state, dispatch, dispatchFilter, stateFilter}}>
            {children}
        </CartContext.Provider>
    )
};

export default CartContext;