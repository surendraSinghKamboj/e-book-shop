import bookcitr from "@/assets/booktcitr.jpg"
import booktgg from "@/assets/booktgg.jpg"
import bookth from "@/assets/bookth.jpg"
import booktkmjpg from "@/assets/booktkmjpg.jpg"


const booksData = [
    {
        id: 1,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: "Fiction",
        price: 15.99,
        rating: 4.5,
        coverImage: booktgg,
    },
    {
        id: 2,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genre: "Classics",
        price: 12.99,
        rating: 4.8,
        coverImage: booktkmjpg,
    },
    {
        id: 3,
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        genre: "Fantasy",
        price: 18.99,
        rating: 4.7,
        coverImage: bookth,
    },
    {
        id: 4,
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        genre: "Fiction",
        price: 14.99,
        rating: 4.3,
        coverImage: bookcitr,
    },
];


export default booksData;
