import { Link } from "react-router-dom";
import { FiHeart, FiShoppingCart, FiUser, FiMenu } from "react-icons/fi";

import Logo from "../ui/Logo";
import SearchBar from "../ui/SearchBar";
import IconButton from "../ui/IconButton";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <Logo />

        <SearchBar />

        <div className="hidden md:flex items-center gap-3">
          <IconButton icon={<FiHeart size={22} />} badgeCount={0} />
          <IconButton icon={<FiShoppingCart size={22} />} badgeCount={0} />

          <Link
            to="/login"
            className="flex items-center gap-2 rounded-lg border px-4 py-2 hover:bg-gray-100"
          >
            <FiUser />
            Login
          </Link>
        </div>

        <button className="md:hidden">
          <FiMenu size={28} />
        </button>
      </div>

      <nav className="hidden border-t md:block">
        <div className="mx-auto flex max-w-7xl gap-8 px-4 py-3 font-medium">
          <Link to="/">Home</Link>
          <Link to="/products">Shop</Link>
          <Link to="/categories">Categories</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
}