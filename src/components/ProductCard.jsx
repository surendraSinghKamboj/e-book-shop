// import booksData from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = ({ book }) => {

  return (
    <div className="w-sm m-3 max-h-[500px] rounded shadow-lg">
      <Link href={`/products/${book.slug}`}>
        <div className="w-full max-h-48">
          <Image
            className="w-28 h-32 mx-auto"
            src={book.coverImage}
            alt={book.title}
            width={100}
            height={150}
          />
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{book.title}</div>
          <p className="text-gray-700 text-base">{book.author}</p>
          <p className="text-gray-700 text-base">Genre: {book.genre}</p>
          <p className="text-gray-700 text-base">Rating: {book.rating}</p>
        </div>
        <div className="px-6 py-4">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            Rs. {book.price}
          </span>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add to Cart
          </button>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
