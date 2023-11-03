import { UserInfo } from "./UserInfo";
import { deleteUser, updateUser } from "./api";
import { NewUserData, UserData } from "./types";

type Props = {
    users: UserData[];
};
export function UsersList({ users }: Props) {


    const handleUpdate = (userId: number, user: NewUserData) => {
        updateUser(userId, user)
    }

    const handleDelete = (userId: number) => {
        deleteUser(userId)
    }
    
    return (
        <>
            <ul className="list-none">
                {users.map((user) => (
                    <UserInfo user={user} 
                    onUpdate={handleUpdate}
                    onDelete={handleDelete}
                    />
                ))}
            </ul>
        </>
    );
}