import { Outlet } from "react-router-dom";
import MainNavbar from "../../components/navbar/MainNavbar";

const MainLayout = () => {
  return (
    <div>
      {/* Navbar */}
      <MainNavbar />
      <div className="container">
        <Outlet />
      </div>
      {/* Footer */}
    </div>
  )
}

export default MainLayout;