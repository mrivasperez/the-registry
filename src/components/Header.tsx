import { Link } from "react-router-dom";
import SearchInput from "./SearchInput";

const Header = () => {
  return (
    <div className="bg-blue-50">
      <div className="container flex justify-between items-center mx-auto">
        <Link to={"/"}>NPM Registry</Link>
        <SearchInput />
      </div>
    </div>
  );
};

export default Header;
