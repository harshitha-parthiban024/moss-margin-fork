import books from "../data/books";
import BookCard from "../components/BookCard";

function Collections() {

  return (
    <div className="grid">
      {books.map(book => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}

export default Collections;
