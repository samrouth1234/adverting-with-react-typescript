import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import ProductList from "./components/product/ProductList";
import CreateProduct from "./components/product/CreateProduct";
import { ProductPage } from "./page/product/Index";
import MainLayout from "./page/layout/MainLayout";
import { Learding } from "./page/learding-page/Learding";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          {/* <Route path="/" element={<ProductList />} /> */}
          <Route path="/" element={<Learding />} />
          <Route path="/create-product" element={<CreateProduct />} />
          <Route path="/edit-product/:id" element={<CreateProduct />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
