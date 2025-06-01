
import { Outlet } from "react-router-dom";
import Header from "../component/Header";
import Footer from "../component/Footer";

function Layout() {
  return (
    <div className="site-wrapper">
      <Header />
      <main className="pt-[100px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
