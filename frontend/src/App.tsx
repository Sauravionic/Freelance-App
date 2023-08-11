import "./App.scss";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar"
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import Gigs from "./Pages/Gigs/Gigs";
import Gig from "./Pages/Gig/Gig";
import Orders from "./Pages/Orders/Orders";
import MyGigs from "./Pages/MyGigs/MyGigs";
import Add from "./Pages/Add/Add";
import Message from "./Pages/Message/Message";
import Messages from "./Pages/Messages/Messages";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";

function App() {

  const Layout = () => {
    return (
      <div className="app">
        <Navbar/>
        <Outlet/>
        <Footer/>
      </div>
    )
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/gigs",
          element: <Gigs/>
        },
        {
          path: "/gig/:id",
          element: <Gig/>
        },
        {
          path: "/orders",
          element: <Orders/>
        },
        {
          path: "/mygigs",
          element: <MyGigs/>
        },
        {
          path: "/add",
          element: <Add/>
        },
        {
          path: "/message/:id",
          element: <Message/>
        },
        {
          path: "/messages",
          element: <Messages/>
        },
        {
          path: "/login",
          element: <Login/>
        },
        {
          path: "/register",
          element: <Register/>
        }
      ]
    },
  ])
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
