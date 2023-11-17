import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: '/',
        element:
            <>
                <h1>main</h1>
                <Outlet></Outlet>
            </>,
        children: [
            {
                index: true,
                element: <h1>I am the index of the main route</h1>
            },
            {
                path: 'about',
                element: <h1>I am About</h1>
            },
            {
                path: 'contact',
                element: <>
                    <h1>I am the contact</h1>
                    <Outlet></Outlet>
                </>,
                children: [
                    {
                        path: 'number',
                        element: <h1>I am the children of contact</h1>,
                    }
                ]
            }
        ]
    }
])

export const CustomRouterProvider = () => {
    return <RouterProvider router={router}></RouterProvider>
}

// * luego envuelves App con el 'routerProvider'