import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Projects from "../pages/Projects/Projects";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
          {
            path:'/',
            element:<Home></Home>
          },
          {
            path:'about',
            element:<About></About>
          },
          
          {
            path:'contact',
            element:<Contact></Contact>
          }
          ,
          
          {
            path:'project',
            element:<Projects></Projects>
          }
          
      ]
    },
  ]);
  export default router;