
import { Outlet, Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Layout() {
  return (
    <div>
     <Navbar/>
      <div className="p-4">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
