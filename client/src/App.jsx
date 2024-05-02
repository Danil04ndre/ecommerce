import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./components/Header";
import Auth from "./Pages/Auth";
import ProtectedAuth from "./components/ProtectedAuth";
import MyShopping from "./Pages/MyShopping";
import ProtectedMyShopping from "./components/ProtectedMyShopping";
import AdminPanel from "./Pages/AdminPanel";
import AddProduct from "./Pages/AddProduct";
import AddedProducts from "./Pages/AddedProducts";
import Footer from "./components/Footer";
import Categories from "./Pages/Categories";
import ProductsSubCategory from "./Pages/ProductsSubCategory";
import ProductsCategory from "./Pages/ProductsCategory";
import DetailProduct from "./Pages/DetailProduct";
import Cart from "./Pages/Cart";

function App() {
  const location = useLocation();

  // rutas en las que no quiero mostrar el componente Footer
  const noFooterRoutes = ["/admin-panel", "/admin-panel/add-product", "/admin-panel/added-products"];
  // comprobar si la ruta en la que estamos se encuentra en la lista de rutas sin Footer, para ocultarlo
  const showFooter = !noFooterRoutes.some(route => location.pathname.startsWith(route));




  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<ProtectedAuth />}>
          <Route path="/auth" element={<Auth />} />
        </Route>
        <Route element={<ProtectedMyShopping />}>
          <Route path="/my-shopping" element={<MyShopping />} />
        </Route>
        
        {/* ruta y subrutas de las paginas del admin */}
        <Route element={<AdminPanel />} >
          <Route path="/admin-panel/add-product" element={<AddProduct />} />
          <Route path="/admin-panel/added-products" element={<AddedProducts />} />
        </Route>    

        {/* ruta y subrutas de las paginas de las categorias */}
        <Route path="/categoria-producto" element={<Categories />}>
          <Route path="/categoria-producto/:category" element={<ProductsCategory />}/>
          <Route path="/categoria-producto/:category/:subcategory" element={<ProductsSubCategory />}/>
        </Route>
        <Route path="/categoria-producto/:category/:subcategory/:nameproduct" element={<DetailProduct />}/>
        <Route path="/carrito" element={<Cart />}/>
        <Route path="/*" element={<h1>NO EXISTE LA RUTA</h1>}/>

      </Routes>
      {showFooter && <Footer />}
    </>
  );
}

export default App;
