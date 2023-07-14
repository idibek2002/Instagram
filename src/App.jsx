import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile"
import EditProfile from "./pages/EditProfile/EditProfile"
import Login from "./pages/SignIn/Login";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
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
          },
          
        
      ],
    },
    {
      path:"/login",
      element: <Login />
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
