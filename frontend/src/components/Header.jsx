import React, { useState } from 'react';
import "./header.css";
import { NavLink, useNavigate } from 'react-router-dom';
const Header = () => {
    const [query,setQuery] = useState("");
    const navigate = useNavigate()
    const handleSearch = ()=>{
        navigate(`/search?query=${query}`)
    }
    const handleEnter = (e)=>{
        if(e.key=="Enter"){
            navigate(`/search?query=${query}`)
        }
    }
    const handleChange = (e)=>{
        setQuery(e.target.value)
        console.log("query",query);
    }
    return (
        <ul className='container'>
            <NavLink to="/" className='navItem' 
            style={({ isActive }) => ({
          color: isActive ? 'red' : 'blue',
          textDecoration: isActive ? 'underline' : 'none',
        })}>Home</NavLink>
            <NavLink to="/contact" className='navItem' style={({ isActive }) => ({
          color: isActive ? 'red' : 'blue',
          textDecoration: isActive ? 'underline' : 'none',
        })}>Contact</NavLink>
            <NavLink to="/about" className='navItem' style={({ isActive }) => ({
          color: isActive ? 'red' : 'blue',
          textDecoration: isActive ? 'underline' : 'none',
        })}>About</NavLink>
            <NavLink to="/add-book" className='navItem' style={({ isActive }) => ({
          color: isActive ? 'red' : 'blue',
          textDecoration: isActive ? 'underline' : 'none',
        })}>Add Book</NavLink>
        <div>
            <input type="text" placeholder='search here' value={query} onChange={handleChange} onKeyDown={handleEnter}/>
            <button onClick={handleSearch}>Search</button>
        </div>
        </ul>
    );
}

export default Header;
