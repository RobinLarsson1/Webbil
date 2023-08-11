import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer"

const Root = () => {
  return (
    <div className="page-container">
      <Header />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Root;