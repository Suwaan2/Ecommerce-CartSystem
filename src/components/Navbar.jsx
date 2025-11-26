import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { CiDark } from "react-icons/ci";
import { useSelector } from "react-redux";
import { useState } from "react";

function Navbar() {
    const [dark, setDark] = useState(null)
  const totalQuantity = useSelector(state => state.cart.totalQuantity);
  function changeTheme() {
    document.body.style.background = dark ? 'black' : 'white'
    document.body.style.color = dark ? 'white' : 'black'
  }

  return (
    <nav className="sticky top-0 z-50 bg-blue-600 shadow-md">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-16">
      
      {/* Logo */}
      <Link to="/" className="text-white text-2xl font-bold hover:text-gray-200 transition-colors">
        MyStore
      </Link>

      
      <div className="flex items-center gap-4">
       
        <Link to="/cart" className="relative text-white hover:text-gray-200 transition-colors">
          <FaShoppingCart size={24} />
          {totalQuantity > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-semibold">
              {totalQuantity}
            </span>
          )}
        </Link>

      
        <button
          onClick={() => changeTheme(setDark((prev) => !prev))}
          className="p-2 rounded-full hover:bg-blue-500 transition-colors"
        >
          <CiDark size={24} />
        </button>
      </div>
    </div>
  </div>
</nav>

  );
}

export default Navbar;
