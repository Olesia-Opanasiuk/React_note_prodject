import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Create from "./components/Create";
import Main from "./components/Main";
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Note from "./components/Note";
import Error from "./components/Error";

function App() {
  const bg = {
    "main": {
      "srcImg": "/image/1.jpg",
      "bgColor": ""
    },
    "about": {
      "srcImg": "/image/2.jpg",
      "bgColor": ""
    },
    "create": {
      "srcImg": "/image/4.jpg",
      "bgColor": ""
    },
    "note": {
      "srcImg": "/image/3.png",
      "bgColor": ""
    },
    "error": {
      "srcImg": "/image/5.jpg",
      "bgColor": ""
    }
  }

  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Main data={bg} />} />
          <Route path="/about" element={<About data={bg} />} />
          <Route path="/create" element={<Create data={bg} />} />
          <Route exact path="/note/" element={<Note data={bg} />} />
          <Route exact path="/note/:noteURL" element={<Note data={bg} />} />
          <Route path="*" element={<Error data={bg} />} />
        </Routes>
      </Router>
      <Footer />
    </div >
  );
}

export default App;
