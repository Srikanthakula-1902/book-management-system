import React, { useEffect, useState } from 'react';
import "./bookform.css"
import { useLocation, useNavigate } from 'react-router-dom';
const defaultData = {
    title: '',
    author: '',
    genre: '',
    pages: '',
    publishedDate: '',
  }
function EditBook() {
  const [formData, setFormData] = useState(defaultData);
  const location = useLocation();
  const [bookId,setBookId] = useState();
  useEffect(()=>{
    const data = JSON.parse(location.state.formData);
    setBookId(data.BookID);
    setFormData({
        bookId: data.BookID,
        title: data.Title,
        author: data.AuthorName,
        genre: data.GenreName,
        pages: data.Pages,
        publishedDate: data.PublishedDate,
      });
  },[])
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:3000/books/${bookId}`,{
      method:"PUT",
      body:JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    })
    const json = await response.json();
    console.log(json);
    if(json.success){
      alert("book updated successfully");
    } else{
        alert("failed to update book details");
      navigate("/");
    }
    setFormData(defaultData)
  };

  return (
    <div className='form-main'>
      <h2>Book Form</h2>
      <form className='form-container' onSubmit={handleSubmit}>
        <div>
          <label>Title: </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Author: </label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Genre: </label>
          <input
            type="text"
            name="genre"
            value={formData.genre}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Pages: </label>
          <input
            type="number"
            name="pages"
            value={formData.pages}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Published Date: </label>
          <input
            type="date"
            name="publishedDate"
            value={formData.publishedDate}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit"  style={{width:"fit-content"}}>Save Edit Details</button>
      </form>
    </div>
  );
}

export default EditBook;
