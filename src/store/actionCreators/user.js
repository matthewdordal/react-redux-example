import {
    UPDATE_FIRST_NAME,
    UPDATE_LAST_NAME
} from '../../constants';

export const updateFirstName = name => ({
    type: UPDATE_FIRST_NAME,
    payload: name
});

export const updateLastName = name => ({
    type: UPDATE_LAST_NAME,
    payload: name
});
