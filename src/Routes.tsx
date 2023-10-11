import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom';
import { WelcomePage } from './pages/Welcome';
import App from './App';
import { UsersPage } from './pages/Users';
import UsersList from './components/UsersList';
import UserRoles from './components/UserRoles';
import UserLicenses from './components/UserLicenses';

const router = createBrowserRouter([
    {
        path: 'welcome',
        element: <WelcomePage />,
    },
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/users',
        element: <UsersPage />,
        children: [
            {
                path: 'list',
                element: <UsersList />
            },
            {
                path: 'role',
                element: <UserRoles />
            },
            {
                path: 'license',
                element: <UserLicenses />
            },
        ]
    }
]);

export function Routes() {
    return <RouterProvider router={router} />;
}