import { FiSearch } from "react-icons/fi";

export default function SearchBar() {
  return (
    <div className="hidden md:flex items-center w-full max-w-lg border border-gray-300 rounded-lg overflow-hidden">
      <input
        type="text"
        placeholder="Search products..."
        className="w-full px-4 py-2 outline-none"
      />

      <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 transition-colors">
        <FiSearch />
      </button>
    </div>
  );
}