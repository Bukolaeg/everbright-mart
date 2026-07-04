import { Link } from "react-router-dom";
import { FiHeart, FiShoppingCart, FiUser } from "react-icons/fi";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link
          to="/"
          className="text-2xl font-bold text-blue-600"
        >
          EverBright Mart
        </Link>

        <div className="hidden md:flex gap-6 font-medium">
          <Link to="/">Home</Link>
          <Link to="/products">Shop</Link>
          <Link to="/categories">Categories</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="flex items-center gap-4 text-2xl">
          <FiHeart className="cursor-pointer" />
          <FiShoppingCart className="cursor-pointer" />
          <FiUser className="cursor-pointer" />
        </div>
      </nav>
    </header>
  );
}