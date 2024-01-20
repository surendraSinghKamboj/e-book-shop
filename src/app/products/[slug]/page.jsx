import booksData from "@/data/data";
import Image from "next/image";
import React from "react";

const page = ({ params: { slug } }) => {
  const [book] = booksData.filter((item) => item.slug === slug);
  console.log(book);
  return (
    <div className="container mx-auto my-8">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 md:pr-8">
          <Image
            src={book.coverImage}
            alt={book.title}
            width={500}
            height={750}
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-4">{book.title}</h1>
          <p className="text-gray-600 mb-2">{book.author}</p>
          <p className="text-gray-600 mb-2">{book.genre}</p>
          <p className="text-lg mb-4">{book.description}</p>

          <div className="mb-4">
            <h2 className="text-xl font-bold mb-2">Key Themes</h2>
            <ul>
              {book.keythemes.map((theme, index) => (
                <li key={index} className="mb-2">
                  <h3 className="text-lg font-semibold">{theme.title}</h3>
                  <p className="text-gray-600">{theme.desc}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-4">
            <h2 className="text-xl font-bold mb-2">Additional Description</h2>
            <p className="text-lg">{book.desc}</p>
          </div>

          <div className="mb-4">
            <h2 className="text-xl font-bold mb-2">Meta Information</h2>
            <p className="text-lg">
              Title: {book.meta.title}
              <br />
              Keywords: {book.meta.keywords.join(", ")}
            </p>
          </div>

          <div className="mb-4">
            <h2 className="text-xl font-bold mb-2">Price and Rating</h2>
            <p className="text-lg">
              Price: ${book.price}
              <br />
              Rating: {book.rating}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
