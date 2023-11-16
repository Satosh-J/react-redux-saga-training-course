import { DELETE_USER, FETCH_USERS, SAVE_USER, UPDATE_USER } from '../store/actions';
import { NewUserData, UserData } from './types';

export async function getUsers() {
    const response = await fetch(
        'http://localhost:3001/users'
    );
    const body: UserData[] = await response.json()
    return body;
}


export const fetchUsers = () => {
    const fetchWorkCenterUri = `http://localhost:3001/users`;

    const payload = {
        action: FETCH_USERS,
        method: 'GET',
        url: fetchWorkCenterUri,
    };
    return { type: 'API_INVOCATION', payload };
};


export const updateUser = (id: number, user: NewUserData) => {
    const url = `http://localhost:3001/users/${id}`

    const payload = {
        action: UPDATE_USER,
        method: 'PUT',
        url,
        data: user
    };
    return { type: 'API_INVOCATION', payload };
};


export const deleteUser = (id: number) => {
    const url = `http://localhost:3001/users/${id}`

    const payload = {
        action: DELETE_USER,
        method: 'DELETE',
        url,
        data: id
    };
    return { type: 'API_INVOCATION', payload };
};


export const saveUser = (
    newUserData: NewUserData
) => {

    const url = `http://localhost:3001/users`

    const payload = {
        action: SAVE_USER,
        method: 'POST',
        url,
        data: newUserData
    };
    return { type: 'API_INVOCATION', payload };

}