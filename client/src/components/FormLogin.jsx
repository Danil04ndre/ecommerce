import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../reducers/userSlice";
import { tokenData } from "../helpers/tokenData.js";
import { notify } from "../helpers/toastify.js";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

const initialFormLogin = {
  email: "",
  password: "",
};

const FormLogin = () => {
  const [formLogin, setformLogin] = useState(initialFormLogin);
  const [incorrectAccount, setIncorrectAccount] = useState(false);
  const [inputNoData, setInputNoData] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setformLogin({
      ...formLogin,
      [e.target.name]: e.target.value,
    });
  };

  const submitLogin = async (e) => {
    e.preventDefault();
    if (formLogin.email.length === 0 || formLogin.password.length === 0) {
      return setInputNoData(true);
    } else {
      setInputNoData(false);
    }

    try {
      const res = await fetch("http://localhost:3000/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(formLogin),
        }),
        json = await res.json();
      console.log(json);
      if (json.incorrectAccount) {
        setIncorrectAccount(true);
      }
      if (json.success) {
        setIncorrectAccount(false);
        const userData = tokenData();
        console.log(userData)
        dispatch(setUser(userData));
        navigate("/")
      }
      if (!res.ok) {
        throw { status: res.status, statusText: res.statusText };
      }
    } catch (err) {
      notify(
        "error",
        `${err.status || "Servidor no disponible en este momento,"} ${
          err.statusText || "Intentalo mas tarde."
        }`
      );
    }
  };

  return (
    <form className="form" onSubmit={submitLogin}>
      <h3>ACCEDER</h3>
      <input
        type="email"
        placeholder="Correo"
        onChange={handleChange}
        name="email"
        value={formLogin.email}
      />
      <input
        type="password"
        placeholder="Contraseña"
        onChange={handleChange}
        name="password"
        value={formLogin.password}
      />
      <p>{incorrectAccount && "Correo o contraseña incorrectos."}</p>
      <p>{inputNoData && "Los campos no pueden estar vacios."}</p>
      <button type="submit">Iniciar sesión</button>
      <ToastContainer />
    </form>
  );
};

export default FormLogin;
