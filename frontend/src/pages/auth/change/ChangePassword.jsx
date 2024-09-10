import React from "react";
import "./ChangePassword.css";
import { InputText } from "primereact/inputtext";
import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";
import { Button } from 'primereact/button';

const ChangePassword = () => {
    const handleChange = () => { };

    const handleSendCode = () => {
        // Lógica para enviar o código
        alert("Código enviado para o e-mail.");
    };

    const handleChangePassword = () => {
        // Lógica para alterar a senha
        alert("Senha alterada com sucesso.");
    };

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
                    <div className="button-container">
                        <Button
                            label="Mandar Código"
                            className="p-button p-button-primary"
                            onClick={handleSendCode}
                        />
                        <Button
                            label="Alterar Senha"
                            className="p-button p-button-success"
                            onClick={handleChangePassword}
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ChangePassword;
