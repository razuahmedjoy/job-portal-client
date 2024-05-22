import { Outlet } from "react-router-dom";
import NavbarComponent from "./components/Navbar";
import Footer from "./components/Footer";


function App() {


  return (
    <>
      <NavbarComponent />

      <Outlet />
      <Footer />
    </>
  )
}

export default App
