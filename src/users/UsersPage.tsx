import { useEffect, useState } from 'react';
import { NewUserData, UserData } from './types';
import { UsersList } from './UsersList';
import { NewUser } from './NewUser';
import { saveUser } from './saveUser';
import { getUsers } from './api';

export function UsersPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [users, setUsers] = useState<UserData[]>([]);

    useEffect(() => {
        let cancel = false;

        getUsers().then((data) => {
            if (!cancel) {
                setUsers(data);
                setIsLoading(false);
            }
        });
        return () => {
            cancel = true;
        };
    }, []);

    const handleSave = async (user: NewUserData) => {
        const newUser = await saveUser(user)
        console.log({
            user, newUser
        })
        setUsers([newUser, ...users])
    }

    if (isLoading) {
        return (
            <div>
                Loading ...
            </div>
        );
    }



    return (
        <div>
            <h2 >Users</h2>
            {
                isLoading ? <p>loading...</p> :
                    <NewUser onSave={handleSave} />
            }
            <UsersList users={users} />
        </div>
    );
}