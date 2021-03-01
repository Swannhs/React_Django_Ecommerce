import {PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS} from "../constants/productConstants";
import DjangoApi from "../components/RestApi/DjangoApi";


export const listProducts = () => async (dispatch) => {
    try {
        dispatch({type: PRODUCT_LIST_REQUEST})

        DjangoApi.get('/products/')
            .then(response => {
                dispatch({
                    type: PRODUCT_LIST_SUCCESS,
                    payload: response.data
                })
            })

    } catch (error) {
        dispatch({
            type: PRODUCT_LIST_FAIL,
            payload: error.response && error.data.message
                ? error.response.data.message
                : error.message
        })
    }
}
