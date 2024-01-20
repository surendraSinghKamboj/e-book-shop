import ProductCard from "@/components/ProductCard";
import booksData from "@/data/data";
import React from "react";

const page = () => {
  return (
    <div className="container mx-auto flex flex-wrap flex-col sm:flex-row justify-between items-center ">
      {booksData &&
        booksData.map((item) => <ProductCard key={item.id} book={item} />)}
    </div>
  );
};

export default page;
