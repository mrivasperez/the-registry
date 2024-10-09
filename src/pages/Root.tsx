import Header from "../components/Header";
import { Outlet } from "react-router-dom";
// ROOT LAYOUT
const Root = () => {
  return (
    <div className="font-mono">
      <Header />
      <div className="container mx-auto md:px-20 sm:px-5 px-2">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
