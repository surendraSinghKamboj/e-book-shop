import Image from "next/image";
import React from "react";

const ProductCard = ({ book }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <Image className="w-full" src={book.coverImage} alt={book.title} width={200} height={200} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{book.title}</div>
        <p className="text-gray-700 text-base">{book.author}</p>
        <p className="text-gray-700 text-base">Genre: {book.genre}</p>
        <p className="text-gray-700 text-base">Rating: {book.rating}</p>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          ${book.price}
        </span>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
