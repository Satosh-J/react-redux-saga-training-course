import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { User } from '../api/authenticate';

type Props = {
    user?: User;
    permissions?: string[];
};

export default function AdminPage() {
    const user = useSelector(
        (state: RootState) => state.user.user
      );
    
    return (
        <>
            {
                user && <h1>
                    Welcome {
                        user.name
                    }!
                </h1>
            }
            <h1>Admin Panel</h1>
            <p>You should't come here often because I am Lazy! 🤣</p>
        </>
    );
}