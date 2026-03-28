import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import ProductListing from "./pages/ProductListing";
import LayoutWrapper from "./components/common/LayoutWrapper";

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
