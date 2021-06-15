import { history } from '../AppRouter';
import { getErrors } from './errors';
import {initiateGetProfile} from './profile'



export const login = (user) => ({
    type: "LOGIN",
    user
})

export const initiateLogin = (email, password, from) => {
    return async (dispatch) => {
        try {
            const data = {
                "email": email,
                "password": password
            }
            const result = await fetch('http://localhost:3000/login', {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            // console.log(result)

            if (result.ok) {
                const user = await result.json()
                localStorage.setItem('user_token', user.token)
                dispatch(login(user))
                console.log(user)
                dispatch(initiateGetProfile(user.email))
                if(from){
                    history.push(from)
                }
                else {
                    history.push('/profile')
                }

            }
            else {
                const res = await result.json()
                res && dispatch(getErrors(res))
            }
        } catch (error) {
            console.log('error', error);
            error && dispatch(getErrors(error));
        }
    }
}

export const registerNewUser = (data) => {
    return async (dispatch) => {
        try {
            var result = await fetch('http://localhost:3000/register', {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            if(result.ok){
                return { success: true }
            }
            else {
                const res = await result.json()
                res && dispatch(getErrors(res))
                return { success: false };
            }
        } catch (error) {
            console.log('error', error);
            error && dispatch(getErrors(error));
            return { success: false };
        }
    }
}