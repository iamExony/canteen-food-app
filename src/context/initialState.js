import { fetchCart, fetchUser } from "../utils/fetchLocalStorage";

const userInfo = fetchUser()
const cartInfo = fetchCart()

export const initialState = {
    user : userInfo,
    cartItems : cartInfo,
    foodItems : null,
    cartShow : false,
};