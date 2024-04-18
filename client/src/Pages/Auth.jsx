import React, { useState } from "react";
import FormRegister from "../components/FormRegister";
import RegisterInfo from "../components/RegisterInfo";
import "../css/AuthPage.css";
import FormLogin from "../components/FormLogin";
const Auth = () => {
  const [formRegister, setFormRegister] = useState(false);

  const handleAuth = () => {
    setFormRegister(!formRegister);
  };
  return (
    <>
      <section className="container-auth">
        <article className="auth container">
          <div className="div">{formRegister ? <FormRegister setFormRegister={setFormRegister}/> : <FormLogin />}</div>
          <div className="div">
            <RegisterInfo handleAuth={handleAuth} formRegister={formRegister} />
          </div>
        </article>
      </section>
    </>
  );
};

export default Auth;
