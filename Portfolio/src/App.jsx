import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Top from "./Components/Top";

function App() {
  return (
    <div className="bg-[#001524]">
      <Navbar />
      <Outlet />
      <Footer />
      <Top />
    </div>
  );
}

export default App;
