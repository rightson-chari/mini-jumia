import { createSlice } from "@reduxjs/toolkit";
import SignIn from "../SignIn";

const carts = createSlice({
    name: "carts",
    initialState: {
        itemList: [],
        totalQuantity: 0,
        totalPrice: 0,
        enter: false,
        existing: false,
        users: [],
    },
    reducers: {
        addItem(state, action) {
            const newItem = action.payload;

            const exist = state.itemList.find((item) => newItem.id === item.id);
            if (exist) {
                exist.quantity++;
            } else {
                state.itemList.push({
                    id: newItem.id,
                    price: newItem.price,
                    image: newItem.image,
                    title: newItem.title,
                    quantity: newItem.quantity + 1,
                });
            }
            state.totalQuantity++;
        },
        reduceAmount(state, action) {
            let existingItem = state.itemList.find(
                (item) => item.id === action.payload
            );
            if (existingItem.quantity === 1) {
                state.itemList = state.itemList.filter(
                    (item) => item.id !== existingItem.id
                );
            } else {
                existingItem.quantity--;
            }
            state.totalQuantity--;
        },
        removeItem(state, action) {
            let existingItem = state.itemList.find(
                (item) => item.id === action.payload
            );

            if (existingItem) {
                state.itemList = state.itemList.filter(
                    (item) => item.id !== existingItem.id
                );
            }
            state.totalQuantity = state.totalQuantity - existingItem.quantity;
        },
        summary(state, action) {
            state.totalPrice = action.payload;
        },
        login(state, action) {
            const existingUser = state.users.find(
                (user) => user.password === action.payload.password
            );
            if (existingUser) {
                state.enter = true;
            } else {
                state.enter = false;
            }
        },
        sign(state, action) {
            const newUser = action.payload;
            state.users.push({ name: newUser.name, password: newUser.password });
            console.log(state.users);
            console.log(newUser);
        },
    },
});

export const mathActions = carts.actions;
export default carts;