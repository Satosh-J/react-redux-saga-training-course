import { SavedUserData, NewUserData } from "./types";

export async function saveUser(
    newUserData: NewUserData
) {
    const response = await fetch(
        'http://localhost:3001/users',
        {
            method: 'POST',
            body: JSON.stringify(newUserData),
            headers: {
                'Content-Type': 'application/json',
            },
        }
    );
    const body = (await response.json()) as SavedUserData;
    return { ...newUserData, ...body };
}