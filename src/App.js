import "./App.css";
import News from "./News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<News></News>}></Route>
        <Route path="/:category" element={<News></News>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
