import { RouterProvider, createBrowserRouter } from 'react-router-dom';

// Components
import App from 'src/App';
import PageTest from 'src/pages/PageTest/PageTest';
import ProfilePage from 'src/pages/ProfilePage';

const routes = [
    {
        path: '/',
        element: <App />,
        children: []
    },
    {
        // path: '/profile/:id',
        path: '/profile',
        element: <ProfilePage />,
        children: []
    },
    {
        path: '/test',
        element: <PageTest />
    }
];

function useRouterProvider() {
    return (
        <RouterProvider router={createBrowserRouter(routes)}></RouterProvider>
    );
}

export default useRouterProvider;
