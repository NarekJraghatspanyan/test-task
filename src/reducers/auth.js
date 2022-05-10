import React from "react";

export const initialState = {
    email: "",
    code: "",
    languageID: 'english',
};

export const AuthReducer = (initialState, action) => {
    console.log(action);
    switch (action.type) {
        case "SET_EMAIL":
            return {
                ...initialState,
                email: action.payload.email,
            };
        case "SET_CODE":
            return {
                ...initialState,
                code: action.payload.code,
            };
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }

}