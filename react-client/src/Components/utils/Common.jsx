import {history} from "../AppRouter"
import store from "../store/store"
import {initiateGetProfile} from "../actions/profile"
import { login } from "../actions/auth";
import jwt_decode from 'jwt-decode'

export const validateFields = (fieldsToValidate) => {
  return fieldsToValidate.every((field) => Object.values(field)[0] !== '');
};

export const maintainSession = () => {
  const user_token = localStorage.getItem('user_token');
  if (user_token) {
    const decoded = jwt_decode(user_token);
    updateStore(decoded);
  } else {
    console.log("No user token")
    history.push('/');
  }
};

export const updateStore = (user) => {
  const { userid, email } = user;
  store.dispatch(
    login({
      userid,
      email,
      token: localStorage.getItem('user_token')
    })
  );
  store.dispatch(initiateGetProfile(email));
};