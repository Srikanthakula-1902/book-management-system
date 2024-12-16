import Header from "./components/Header"
import {Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AddBook from "./pages/AddBook";
import SearchDetails from "./pages/SearchDetails";
import ViewBook from "./pages/ViewBook";
import EditPage from "./pages/EditPage";

function App() {
  return (
    <>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/add-book" element={<AddBook/>}/>
      <Route path="/search" element={<SearchDetails/>}/>
      <Route path="/view-book" element={<ViewBook/>}/>
      <Route path="/edit-book" element={<EditPage/>}/>
     </Routes>
    </>
  )
}

export default App
