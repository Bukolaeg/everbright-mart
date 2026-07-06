import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

export default function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white">
        <FaShoppingCart className="text-xl" />
      </div>

      <div>
        <h1 className="text-2xl font-bold">
          <span className="text-blue-600">EverBright</span>{" "}
          <span className="text-orange-500">Mart</span>
        </h1>

        <p className="text-xs text-gray-500">
          Bright Choices. Better Prices.
        </p>
      </div>
    </Link>
  );
}