import Image from "next/image";
import booksData from "@/data/data";
import ProductCard from "@/components/ProductCard";
import books from '@/assets/books.png'
import store from '@/assets/store.png'

export default function Home() {
  return (
    <>
      <div className="container mx-auto flex justify-center my-3 items-center">
        <Image src={books} width={500} height={500} alt="Banner" title="banner image" />
        <Image src={store} width={500} height={500} alt="Banner" title="banner image" />
      </div>
      <div className="container mx-auto flex flex-wrap flex-col sm:flex-row justify-between items-center ">
        {
          booksData && booksData.map((item) => <ProductCard key={item.id} book={item} />)
        }
      </div>
    </>
  );
}
