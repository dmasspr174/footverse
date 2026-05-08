import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TopLoader from "./components/TopLoader";

// Lazy load pages
const Home = lazy(() => import("./pages/Home"));
const Product = lazy(() => import("./pages/Product"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const Search = lazy(() => import("./pages/Search"));
const Likes = lazy(() => import("./pages/Likes"));
const Cart = lazy(() => import("./pages/Cart"));

export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="pt-24 md:pt-20">
        <Suspense fallback={<TopLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/product" element={<Product />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/likes" element={<Likes />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
}
