import { createBrowserRouter } from "react-router-dom"
import App from "../App";
import Home from "../pages/Home/Home";
import Formation from "../pages/Formation/Formation";
import Contact from "../pages/Contact/Contact";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/formation',
        element: <Formation />
      },
      {
        path: '/contact',
        element: <Contact />
      }

    ]
  }
])

export default router