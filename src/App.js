import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Loginform from "./components/loginform";
import Homepage from "./components/homepage";
import Bloglist from "./components/bloglist";
import Blog from "./components/blog";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Loginform />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/blogs" element={<Bloglist />} />
          <Route path="/blogs/:id" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
