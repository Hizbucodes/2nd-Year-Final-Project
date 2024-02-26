import { createContext, useEffect, useReducer } from "react";
import { INITIAL_VALUES, productReducer } from "../reducers/productReducer";
import { FETCH_ACTIONS } from "../actions";
import axios from 'axios';

const ProductContext = createContext({});

export const ProductProvider = ({children}) => {

    const[state, dispatch] = useReducer(productReducer, INITIAL_VALUES);

    const {product, loading, error} = state;


    useEffect(()=>{

        dispatch({type: FETCH_ACTIONS.PROGRESS})
        const fetch_Products = async () => {
            try{
                const response = await axios.get('http://localhost:3500/products');
                if(response.status === 200){
                    dispatch({type: FETCH_ACTIONS.SUCCESS, data: response.data});
                }
            }catch(err){
                dispatch({type: FETCH_ACTIONS.ERROR, error: err.message})
            }
        }

        fetch_Products();

    }, []);

    return(
        <ProductContext.Provider value={{product, loading, error}}>
            {children}
        </ProductContext.Provider>
    )
};

export default ProductContext;