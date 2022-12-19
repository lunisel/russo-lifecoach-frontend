import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Login from "./components/pages/admin/login/Login";
import Blog from "./components/pages/blog/Blog";
import SingleBlogPost from "./components/pages/blog/SingleBlogPost";
import Home from "./components/pages/home/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articoli" element={<Blog />} />
          <Route path="/articoli/:id" element={<SingleBlogPost />} />
          <Route path="/admin" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
