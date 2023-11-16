import { useEffect } from 'react';
import { NewUserData } from './types';
import { UsersList } from './UsersList';
import { NewUser } from './NewUser';
import { fetchUsers, saveUser } from './api';
import { useDispatch, useSelector } from 'react-redux';


export function UsersPage() {
    const { users, loading } = useSelector((state: any) => state.user)

    const dispatch = useDispatch()

    useEffect(() => {
        let cancel = false;

        dispatch(fetchUsers())

        return () => {
            cancel = true;
        };
    }, []);

    const handleSave = async (user: NewUserData) => {

        dispatch(saveUser(user))
        // setUsers([newUser, ...users])
    }


    return (
        <div>
            <h2 >Users</h2>
            {
                loading ? <p>loading...</p> :
                    <NewUser onSave={handleSave} />
            }
            <UsersList users={users} />
        </div>
    );
}