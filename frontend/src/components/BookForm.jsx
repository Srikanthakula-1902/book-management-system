import React, { useState } from 'react';
import "./bookform.css"
const defaultData = {
  title: '',
  author: '',
  genre: '',
  pages: '',
  publishedDate: '',
}
function BookForm() {
  const [formData, setFormData] = useState(defaultData);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3000/books",{
      method:"POST",
      body:JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    })
    const json = await response.json();
    console.log(json);
    if(json.success){
      alert("book added successfully");
    } else{
      alert("failed to add book");
    }
    setFormData(defaultData)
  };

  return (
    <div className='form-main'>
      <h2>Add Book Here</h2>
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
        <button type="submit"  style={{width:"fit-content"}}>Add Book</button>
      </form>
    </div>
  );
}

export default BookForm;
