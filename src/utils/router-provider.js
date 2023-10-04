import { RouterProvider, createBrowserRouter } from 'react-router-dom';

// Components
import App from 'src/App';
import PageTest from 'src/pages/PageTest/PageTest';
import ProfilePage from 'src/pages/ProfilePage';
import MainContent from 'src/components/MainContent';

const routes = [
    {
        path: '',
        element: <App />,
        children: [
            {
                path: '/',
                element: <MainContent />
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
