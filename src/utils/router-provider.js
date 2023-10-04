import { RouterProvider, createBrowserRouter } from 'react-router-dom';

// Components
import App from 'src/App';
import PageTest from 'src/pages/PageTest/PageTest';
import ProfilePage from 'src/pages/ProfilePage';
import ControllerFeed from 'src/components/ControllerFeed';

const routes = [
    {
        path: '',
        element: <App />,
        children: [
            {
                path: '/',
                element: <ControllerFeed />
            },
            {
                // path: '/profile/:id',
                path: '/profile',
                element: <ProfilePage />
            }
        ]
    },
    {
        // path: '/:catchAll(.*)*',
        path: '*',
        element: <div>Error Page Not Found!</div>
    }
];

if (import.meta.env.DEV) {
    routes.push({
        path: '/test',
        element: <PageTest />
    });
}

function routerProvider() {
    return (
        <RouterProvider router={createBrowserRouter(routes)}></RouterProvider>
    );
}

export default routerProvider;
