import { lazy } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const Menu = lazy(() => import("./pages/Menu"));
const Recipes = lazy(() => import("./pages/Recipes"));
const DetailedRecipe = lazy(() => import("./pages/DetailedRecipe"));
const Cart = lazy(() => import("./pages/Cart"));
const Checkout = lazy(() => import("./pages/Checkout"));
const Contact = lazy(() => import("./pages/Contact"));
const Page404 = lazy(() => import("./pages/Page404"));

function App() {
  return (
    <Router>
      <div className="w-full min-h-screen flex flex-col items-center justify-start overflow-x-hidden box-border bg-[var(--color-bg)]">
        <Header />
        <main className="w-full min-h-screen flex flex-col items-center justify-start box-border">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/food/:id" element={<DetailedRecipe />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/*" element={<Page404 />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
