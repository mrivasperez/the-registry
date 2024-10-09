import { Link } from "react-router-dom";
import SearchInput from "./SearchInput";

const Header = () => {
  return (
    <div className="bg-blue-50 border-b border-b-blue-200 mb-4">
      <div className="container flex justify-between items-center mx-auto">
        <Link to={"/"} className="font-bold text-lg text-slate-800 font-mono">
          NPM Registry
        </Link>
        <SearchInput />
      </div>
    </div>
  );
};

export default Header;
