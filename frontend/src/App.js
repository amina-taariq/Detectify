import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Feature from "./components/Feature";
import FileUpload from "./components/FileUpload";


function App() {
  return (
    <div className="bg-green min-h-screen">
      <Routes>
        <Route
          path="/"
          element={<Layout />}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
