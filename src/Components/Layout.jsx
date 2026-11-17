import Navbar from "./Navbar.jsx";
import { Outlet } from "react-router-dom";
import Footer from "./Footer.jsx";

export default function Layout() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main  className="pt-28 pb-64 sm:pb-56 md:pb-36" >
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}