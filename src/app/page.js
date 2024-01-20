import Image from "next/image";
import booksData from "./data/data";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  return (
    <div className="container mx-auto flex justify-center items-center">
      {
        booksData && booksData.map((item) => <ProductCard key={item.id} book={item} />)
      }
    </div>
  );
}
