import { FETCH_USERS } from '../store/actions';
import { NewUserData, UserData } from './types';

export async function getUsers() {
    const response = await fetch(
        'http://localhost:3001/users'
    );
    const body: UserData[] = await response.json()
    return body;
}

export async function updateUser(id: number, user: NewUserData) {
    const response = await fetch(`http://localhost:3001/users/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    });

    if (!response.ok) {
        throw new Error(`Failed to update user: ${response.statusText}`);
    }

    const updatedUser: UserData = await response.json();
    return updatedUser;
}

export async function deleteUser(id: number) {
    const response = await fetch(`http://localhost:3001/users/${id}`, {
        method: 'DELETE',
    });

    if (!response.ok) {
        throw new Error(`Failed to delete user: ${response.statusText}`);
    }

    return 'User deleted successfully';
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