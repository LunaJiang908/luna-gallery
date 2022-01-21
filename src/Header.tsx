import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="mx-10 mt-10 mb-2">
      <nav className="flex text-2xl">
        <Link className="mr-5" to="/">
          Character
        </Link>
        <Link className="mr-5" to="/background">Background</Link>
        <Link className="mr-5" to="/visualDev">VisualDev</Link>
        <Link className="mr-5" to="/about">About</Link>
      </nav>
    </div>
  );
}

export default Header;
