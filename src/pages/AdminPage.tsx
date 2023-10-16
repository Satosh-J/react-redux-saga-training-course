import { useAuthContext } from '../AuthContext';
import { User } from '../api/authenticate';

type Props = {
    user?: User;
    permissions?: string[];
};

export default function AdminPage() {
    const { user } = useAuthContext();
    
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