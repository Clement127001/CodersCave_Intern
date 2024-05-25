import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="bg-[#001524]">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
