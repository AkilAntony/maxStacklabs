import { Route, Routes } from "react-router-dom";
import "./App.css";
import ProductListing from "./pages/ProductListing";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ProductListing />} />
      </Routes>
    </>
  );
}

export default App;
