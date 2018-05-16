import {
    UPDATE_FIRST_NAME,
    UPDATE_LAST_NAME
} from '../../constants';

const initialState = {
    firstName: '',
    lastName: ''
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_FIRST_NAME: {
            const { payload } = action;
            
            const newState = {
                ...state,
                firstName: payload
            };

            return newState;
        }
        case UPDATE_LAST_NAME: {
            const { payload } = action;
            
            const newState = {
                ...state,
                lastName: payload
            };

            return newState;
        }
        default:
            return state;
    }
};

export default userReducer
