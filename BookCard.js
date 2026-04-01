import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function BookCard({ book }) {

  const { addToCart } = useContext(CartContext);

  return (
    <div className="card">
      <img src={book.image} alt={book.title} />
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <p>₹{book.price}</p>

      <button onClick={() => addToCart(book)}>
        Add to Cart
      </button>
    </div>
  );
}

export default BookCard;
