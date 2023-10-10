import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom';
import { WelcomePage } from './pages/Welcome';
import App from './App';

const router = createBrowserRouter([
    {
        path: 'welcome',
        element: <WelcomePage />,
    },
    {
        path: '/',
        element: <App />,
    },
]);

export function Routes() {
    return <RouterProvider router={router} />;
}