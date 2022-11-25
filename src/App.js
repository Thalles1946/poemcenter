import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./Components/Home";
import MostRated from "./Components/MostRated";
import PoemPage from "./Components/PoemPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to={"/home"} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/maiscurtidos" element={<MostRated />} />
        <Route path="/poem/:id" element={<PoemPage />} />
      </Routes>
    </div>
  );
}

export default App;
