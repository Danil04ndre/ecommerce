import React from "react";

const RegisterInfo = ({ handleAuth, formRegister }) => {
  return (
    <>
      <h3>REGISTRO</h3>
      <p>
        Registrarse en este sitio te permite añadir productos al carrito,
        comprar y ver tu historial de compras. Si seleccionas la opción <b>admin</b> al
        registrarte, podrás añadir nuevos productos, ver lo que has añadido,
        modificarlos o eliminarlos.
      </p>
      <button className="button" onClick={handleAuth}>
        {formRegister ? "Acceder" : "Registrarse"}
      </button>
    </>
  );
};

export default RegisterInfo;
