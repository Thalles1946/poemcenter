import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./Components/Home";
import MostRated from "./Components/MostRated";
import PoemPage from "./Components/PoemPage";
import { fetchPreviewPoems } from "./Services/get";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchPreviewPoems(setData);
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to={"/home"} />} />
        <Route
          path="/home"
          element={
            <Home data={data} refetch={() => fetchPreviewPoems(setData)} />
          }
        />
        <Route
          path="/maiscurtidos"
          element={
            <MostRated data={data} refetch={() => fetchPreviewPoems(setData)} />
          }
        />
        <Route
          path="/poem/:id"
          element={
            <PoemPage data={data} refetch={() => fetchPreviewPoems(setData)} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
