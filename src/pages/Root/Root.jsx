import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../containers/footer/footer";

export default function Root() {
  return (
    <>
      <header className="overflow-hidden">
        <Navbar />
      </header>
      <Outlet />
      <Footer />
    </>
  );
}
