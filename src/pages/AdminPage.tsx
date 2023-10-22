import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

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