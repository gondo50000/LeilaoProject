import React from "react";
import "./ChangePassword.css";
import { InputText } from "primereact/inputtext";

const ChangePassword = () => {
    const handleChange = () => {};

    return (
        <div className="container">
            <div className="form-container">
                <div className="senha">
                    <InputText onChange={handleChange} name="senha-atual" placeholder="Senha Atual" />
                </div>
                <div className="senha">
                    <InputText onChange={handleChange} name="senha-nova" placeholder="Nova Senha" />
                </div>
                <div className="senha">
                    <InputText onChange={handleChange} name="confirmacao" placeholder="Confirmação Nova Senha" />
                </div>
            </div>
        </div>
    );
};

export default ChangePassword;
