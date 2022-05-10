import axios from 'axios';
import React from "react";
import {BaseUrl} from "../utils/baseUrl";

export const myError = {
    hasError: false,
}

export function loginWithCode(ourData) {
   return axios.post(`${BaseUrl}/Accounts/LoginWithCode`, ourData)
}

export function loginGeneratePassword(emailState) {
    return axios.post(`${BaseUrl}/Accounts/GeneratePassword`, emailState)
}

export function logout() {
    return axios.post(`${BaseUrl}/Accounts/Logout`)
}