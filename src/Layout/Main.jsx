import { Outlet } from "react-router-dom";
import NavBar from "../pages/Shared/NavBar/NavBar";
import Footer from "../pages/Shared/Footer/Footer";


const Main = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto border-double border-4 border-indigo-600">
      <div className="h-20">
          <NavBar></NavBar>
      </div>
          <Outlet></Outlet>
          <Footer></Footer>
      </div>
    </div>
  );
};

export default Main;