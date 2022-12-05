import React from "react";
import { useMemo } from "react";
import { useState } from "react";
import BtnRounded from "../../../atoms/btn-rounded/BtnRounded";
import InputText from "../../../atoms/input-text/InputText";
import Toast from "../../../atoms/toast/Toast";
import "./styles.css";

const Login = () => {
  const [formData, setFormData] = useState({});
  const [toast, setToast] = useState(false);

  const onChangeSetData = (name, event) => {
    setFormData({
      ...formData,
      [name]: event.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.email === process.env.REACT_APP_ADMIN_USER &&
      formData.password === process.env.REACT_APP_ADMIN_PASSWORD
    ) {
      console.log("ALLOWED");
    } else {
      setToast(true);
      console.log("NOT ALLOWED");
    }
  };

  const renderToast = useMemo(() => {
    if (toast) {
      return <Toast text="L'email o la password sono scorrette" />;
    }
  }, [toast]);

  return (
    <div className="container">
      <h1 className="login-title">Login</h1>
      {renderToast}
      <form className="form-container" onSubmit={handleSubmit}>
        <InputText
          placeholder="Inserisci qui la tua email"
          name="email"
          onChangeFunction={onChangeSetData}
        />
        <InputText
          placeholder="Inserisci qui la tua password"
          name="password"
          onChangeFunction={onChangeSetData}
        />
        <BtnRounded type="submit" text="Invia" color="bg-light-blue" />
      </form>
    </div>
  );
};

export default Login;
