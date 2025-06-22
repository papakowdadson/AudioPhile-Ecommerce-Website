import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ProductsDetailsPage from "./pages/ProductsDetailsPage";
import CheckoutPage from "./pages/CheckoutPage";
import { CartProvider } from "./context/cartContext";
import OrdersPage from "./pages/orders";
import NavBar from "./components/shared/NavBar";
import Footer from "./components/shared/Footer";

function App() {
  return (
    <div>
      <CartProvider>
          <Router>
            <NavBar />
            <Routes>
              <Route path="/" element={<HomePage />} /> 
              <Route path="/products" element={<ProductsPage />} /> {/*accepts category query ie. ?category={category} */}
              <Route path="/products/productdetails/:slug" element={<ProductsDetailsPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              {/* TODO: Implement orders page to track single or all orders */}
              <Route path="/orders/:orderID" element={<OrdersPage/>}/>
            </Routes>
            <Footer /> 
          </Router>
      </CartProvider>
    </div>
  );
}

export default App;
