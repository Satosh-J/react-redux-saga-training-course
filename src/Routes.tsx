import { lazy, Suspense } from 'react';
import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom';
import { WelcomePage } from './pages/WelcomePage';
import App from './App';
import UsersList from './components/UsersList';
import UserRoles from './components/UserRoles';
import UserLicenses from './components/UserLicenses';
import { ErrorPage } from './pages/ErrorPage';
import { UsersPage } from './users/UsersPage';

const AdminPage = lazy(() => import('./pages/AdminPage'))

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <WelcomePage />,
            },
            {
                path: 'users',
                element: <UsersPage />,
                children: [
                    {
                        index: true,
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
            },
            {
                path: 'admin',
                element: (
                    <Suspense
                        fallback={
                            <p>Loading ...</p>
                        }
                    >
                        <AdminPage />
                    </Suspense>
                )
            }
        ]
    },
]);

export function Routes() {
    return <RouterProvider router={router} />;
}