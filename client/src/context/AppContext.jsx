import { createContext, useEffect, useRef, useState } from "react";
import { readAllProducts } from "../reducers/productsSlice";
import { useDispatch } from "react-redux";
import { notify } from "../helpers/toastify";
/* al tener los valores de
isOpen SetOpen, refNav tras abrir o cerrar el modal ya que ando reutilizando el 
menu desplegable (<NavList/>) en modo movil y desktop.
al tener el estado que controla y actualiza esos valores en el archivo App.jsx para pasar 
los valores atravez de props a sus componentes (por la reutilizacion), los componentes
hijos es decir los componentesque estan dentro de App.jsx se volvian a renderizar
lo que vi en el curso de jonmircha de las memorizaciones

y pase aqui la carga de datos para toda la aplicacion que dejarlo en App.jsx
para mejorar la estructura de codigo
*/
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [isOpen, setOpen] = useState(false);
  const refNav = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const res = await fetch("http://localhost:3000/get-all-products"),
          json = await res.json();
        if (json.data) {
          dispatch(readAllProducts(json.data));
        } else {
          dispatch(readAllProducts([]));
        }
        if (!res.ok) {
          throw { status: res.status, statusText: res.statusText };
        }
      } catch (err) {
        console.log(err);
        notify("error",
          `${err.status || "Servidor no disponible en este momento,"} ${
            err.statusText || "Intentalo mas tarde."
          }`
        );

      }
    };

    getAllProducts();
  }, []);
  const data = {
    isOpen,
    setOpen,
    refNav

  };

  return (
    <AppContext.Provider value={data}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider };
export default AppContext;
