import { useDispatch, useSelector } from "react-redux";
import { UserInfo } from "./UserInfo";
import { deleteUser, updateUser } from "./api";
import { NewUserData, UserData } from "./types";
import { RootState } from "../store/store";

type Props = {
    users: UserData[];
};
export function UsersList({ users }: Props) {

    const dispatch = useDispatch()

    const handleUpdate = (userId: number, user: NewUserData) => {

        dispatch(updateUser(userId, user))
    }

    const handleDelete = (userId: number) => {
        dispatch(deleteUser(userId))
    }

    const { loading } = useSelector((state: RootState) => state.user)

    return (
        <>
            <ul className="list-none">
                {users.map((user) => (
                    <UserInfo user={user}
                        loading={loading}
                        key={user.id}
                        onUpdate={handleUpdate}
                        onDelete={handleDelete}
                    />
                ))}
            </ul>
        </>
    );
}
