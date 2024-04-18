import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./components/Header";
import Auth from "./Pages/Auth";
import ProtectedAuth from "./components/ProtectedAuth";
import MyShopping from "./Pages/MyShopping";
import ProtectedMyShopping from "./components/ProtectedMyShopping";
import AdminPanel from "./Pages/AdminPanel";
import { useSelector } from "react-redux";
import AddProduct from "./Pages/AddProduct";
import AddedProducts from "./Pages/AddedProducts";
import Footer from "./components/Footer";


function App() {
  const location = useLocation();

  // rutas en las que no quiero mostrar el componente Footer
  const noFooterRoutes = ["/admin-panel", "/admin-panel/add-product", "/admin-panel/added-products"];
  // Comprobar si la ruta en la que estamos se encuentra en la lista de rutas sin Footer, para ocultarlo
  const showFooter = !noFooterRoutes.some(route => location.pathname.startsWith(route));
  
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<ProtectedAuth />}>
          <Route path="/auth" element={<Auth />} />
        </Route>
        <Route element={<ProtectedMyShopping />}>
          <Route path="/my-shopping" element={<MyShopping />} />
        </Route>
        <Route path="/admin-panel" element={<AdminPanel />} >
          <Route path="/admin-panel/add-product" element={<AddProduct />} />
          <Route path="/admin-panel/added-products" element={<AddedProducts />} />
        </Route>
      </Routes>
      {showFooter && <Footer />}
    </>
  );
}

export default App;
