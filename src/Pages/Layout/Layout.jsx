import { Outlet } from "react-router-dom";
import Header from "../../Compoments/Header/Header";
import Navbar from "../../Compoments/Navbar/Navbar";
const Layout = () => {
  return (
    <div id="mytask-layout">
      <Navbar></Navbar>
      <div className="main px-lg-4 px-md-4">
        <Header></Header>
        <Outlet></Outlet>
        
      </div>
      
    </div>
  );
};

export default Layout;
