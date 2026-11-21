import Navbar from "./Navbar.jsx";
import { Outlet } from "react-router-dom";
import Footer from "./Footer.jsx"

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main  className="pt-28 flex-1" >
        <Outlet />
      </main>
     <Footer />
    </div>
  );
}