import React from "react";
import "./ChangePassword.css";
import { InputText } from "primereact/inputtext";
import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";

const ChangePassword = () => {
    const handleChange = () => { };

    return (
        <div className="page-container">
            <Header />
            <div className="container">
                <div className="form-container">
                    <div className="form-field">
                        <InputText
                            onChange={handleChange}
                            name="email"
                            placeholder="E-Mail"
                        />
                    </div>
                    <div className="form-field">
                        <InputText
                            onChange={handleChange}
                            name="codigo"
                            placeholder="Código"
                        />
                    </div>
                    <div className="form-field">
                        <InputText
                            onChange={handleChange}
                            name="senha-nova"
                            placeholder="Nova Senha"
                        />
                    </div>
                    <div className="form-field">
                        <InputText
                            onChange={handleChange}
                            name="confirmacao"
                            placeholder="Confirmação Nova Senha"
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ChangePassword;
