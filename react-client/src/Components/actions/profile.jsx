import { getErrors } from './errors';
import { history } from '../AppRouter';

export const updateProfile = (profile) => ({
    type: 'UPDATE_PROFILE',
    profile
});

export const initiateUpdateProfile = (profileData) => {
    return async (dispatch) => {
        try {
            const result = await fetch('http://localhost:3000/profile', {
                method: "POST",
                body: JSON.stringify(profileData),
                headers: {
                    "Content-Type": "application/json"
                }
            }
            );
            if (result.ok) {
                const profile = await result.json()
                dispatch(updateProfile(profile))
                history.push('/profile');
            }
            else {
                const res = await result.json()
                res && dispatch(getErrors(res))
            }

        } catch (error) {
            error && dispatch(getErrors(error));
        }
    };
};

export const initiateGetProfile = (email) => {
    return async (dispatch) => {
        try {
            const result = await fetch('http://localhost:3000/profile', {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('user_token')}`
                }
            });
            if (result.ok) {
                const profile = await result.json()
                dispatch(updateProfile(profile));
            }
            else {
                const res = await result.json()
                res && dispatch(getErrors(res))
            }

        } catch (error) {
            error.response && dispatch(getErrors(error.response.data));
        }
    };
};