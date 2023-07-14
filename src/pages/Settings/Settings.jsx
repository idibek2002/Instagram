import React from 'react'
import { Link } from 'react-router-dom'

const Settings = () => {
    const router = createBrowserRouter([
        {
          path: "/",
          element: <Settings />,
          children: [
            {
              index: true,
              element: (
                  <Home />
              ),
            },
            {
              path: "/account",
              element: <Profile />
            },
              {
                path:"/account/edit",
                element: <EditProfile />
              }
            
          ],
        },
      ]);
  return (
    <RouterProvider router={router} />
   
  )
}

export default Settings