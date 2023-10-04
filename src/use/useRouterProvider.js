
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// Components
import App from 'src/App';
import PageTest from 'src/pages/PageTest'

const routes = [
    {
        path: '/',
        element: <App />,
        children: []
    },
    {
        path: '/test',
        element: <PageTest />
    }
]

function useRouterProvider() {
    return (
        <RouterProvider router={createBrowserRouter(routes)}></RouterProvider>
    )
}

export default useRouterProvider

