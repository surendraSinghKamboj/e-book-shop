// components/Navbar.js
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <span className="text-white text-lg font-bold">Your E-Commerce</span>
        </Link>
        <div className="space-x-4">
          <Link href="/products">
            <span className="text-white">Products</span>
          </Link>
          <Link href="/cart">
            <span className="text-white">Cart</span>
          </Link>
          {/* Add more links as needed */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
