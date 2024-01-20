// components/Navbar.js
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <span className="text-white text-lg font-bold">Book Shop</span>
        </Link>
        <div className="space-x-4">
          <Link href="/products">
            <span className="text-white">Products</span>
          </Link>
          <Link href="/cart">
            <span className="text-white">Cart</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
