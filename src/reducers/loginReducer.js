import initialState from '../initialState';

const LoginR = (state = initialState, action) => {
    switch(action.type) {
        case 'LOGIN_SUCCESS':
            return initialState;
    }

    return initialState;
}

export default LoginR;