import React, { useState } from "react";
import "../css/FormRegister.css";
import { ToastContainer } from "react-toastify";
import Loader from "./Loader";
import { notify } from "../helpers/toastify";

const initialFormRegister = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  admin: false,
};

const FormRegister = ({ setFormRegister }) => {
  const [formRegister, setformRegister] = useState(initialFormRegister);
  const [loader, setLoader] = useState(false)
  const [passwordsEqual, setPasswordsEqual] = useState(false);
  const [lengthInput, setLengthInput] = useState(false);
  const [emailExist, setEmailExist] = useState(false);

  const handleChange = (e) => {
    setformRegister({
      ...formRegister,
      [e.target.name]: e.target.value,
    });
  };
  const handleChecked = (e) => {
    setformRegister({
      ...formRegister,
      [e.target.name]: e.target.checked,
    });
  };

  const submitRegister = async (e) => {
    e.preventDefault();
    let { name, email, password, confirmPassword } = formRegister;

    if (password !== confirmPassword) {
      return setPasswordsEqual(true);
    } else {
      setPasswordsEqual(false);
    }

    if (name.length < 4 || email.length < 4 || password.length < 4 ||confirmPassword.length < 4) {
      return setLengthInput(true);
    } else {
      setLengthInput(false);
    }
    setLoader(true);
    setEmailExist(false);

    try {
      const res = await fetch("http://localhost:3000/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formRegister),
        }),
        json = await res.json();

      if(json.emailExists){
        setEmailExist(true);
        setLoader(false)
      }
      if (json.created) {
        notify("success", "¡Registro exitoso!");
        setformRegister(initialFormRegister);
        setLoader(false);
        setEmailExist(false);
        
        setTimeout(() => {
          setFormRegister(false);
        }, 1600);
      }
      if (!res.ok) {
        throw { status: res.status, statusText: res.statusText };
      }
    } catch (err) {
      notify("error",`${err.status || "Servidor no disponible en este momento,"} ${err.statusText || "Intentalo mas tarde."}`);
      setLoader(false);
      setEmailExist(false);
    }

  };
  return (
    <>
      <form className="form" onSubmit={submitRegister}>
        <h3>REGISTRARSE</h3>
        <input
          type="text"
          placeholder="Nombre"
          name="name"
          value={formRegister.name}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Correo"
          name="email"
          value={formRegister.email}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Contraseña"
          name="password"
          value={formRegister.password}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Repita contraseña"
          name="confirmPassword"
          value={formRegister.confirmPassword}
          onChange={handleChange}
        />
        <p>{passwordsEqual && "Las contraseñas no coinciden."}</p>
        <p>{lengthInput && "Campos min. 4 caracteres."}</p>
        <p>{emailExist && "Email existente pruebe otro."}</p>
        <div className="checkbox-admin">
          <input
            type="checkbox"
            id="admin"
            name="admin"
            onChange={handleChecked}
          />
          <label htmlFor="admin">
            Admin<small> - (opcional)</small>
          </label>
        </div>
        <button type="submit">{loader ? <Loader /> : 'Registrarse'}</button>
      </form>
      <ToastContainer />
     
    </>
  );
};

export default FormRegister;