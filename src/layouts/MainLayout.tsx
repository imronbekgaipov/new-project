import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MainLayout() {
  return (
    <>
      <header className="bg-[#141829]">
        <Navbar />
      </header>
      <main className="grow max-container py-[20px]">
        <Outlet />
      </main>
      <footer className="bg-[#141829]">
        <Footer />
      </footer>
    </>
  );
}

export default MainLayout;
