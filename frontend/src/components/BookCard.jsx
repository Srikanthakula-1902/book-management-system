import React from 'react';
import { useNavigate } from 'react-router-dom';

function BookCard(props) {
  const { book,setBooks } = props;
  const navigate = useNavigate();
  const onViewDetails = (book)=>{
    navigate("/view-book",{state:{book:JSON.stringify(book)}});
  }
  const onDelete = async (bookId)=>{
    const res = await fetch(`http://localhost:3000/books/${bookId}`,{
      method:"DELETE",
    })
    const json = await res.json();
    if(json.success){
      alert("Book Deleted Successfully");
      setBooks(prev=>prev.filter(book=>book.BookID!=parseInt(bookId)));
    } else{
      alert("Something went wrong on deletion");
    }
  }
  const onEdit = (book)=>{
    navigate("/edit-book",{state:{formData:JSON.stringify(book)}})
  }
  return (
    <div style={styles.card}>
      <h3 style={styles.title}>{book.Title}</h3>
      <div style={styles.actions}>
        <button style={styles.button} onClick={() => onViewDetails(book)}>View Details</button>
        <button style={styles.button} onClick={() => onEdit(book)}>Edit</button>
        <button style={styles.buttonDelete} onClick={() => onDelete(book.BookID)}>Delete</button>
      </div>
    </div>
  );
}

// Inline styles for the card
const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '16px',
    margin: '10px 0',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: '1.5rem',
    marginBottom: '8px',
  },
  actions: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  button: {
    padding: '8px 16px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  buttonDelete: {
    padding: '8px 16px',
    backgroundColor: '#dc3545',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default BookCard;
