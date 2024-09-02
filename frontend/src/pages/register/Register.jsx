import React from "react";
import "./Register.css";
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { useNavigate } from "react-router-dom";

const NewLogin = () => {
    const navigate = useNavigate();

    return (
        <div className="Body">
            <Card title="NewLogin">
                <div className="fiel col-12">
                    <label for="FirstName">Nome:</label><br />
                    <InputText placeholder="Nome" />
                </div>
                <div className="fiel col-12">
                    <label for="LastName">Sobrenome:</label><br />
                    <InputText placeholder="Sobrenome" />
                </div>
                <div className="fiel col-12">
                    <label for="email">E-Mail:</label><br/>
                    <InputText placeholder="E-Mail" />
                </div>
                <div className="col-fixed">
                    <Button label="Cadastrar" />
                </div>
                <div className="col-fixed">
                    <Button onClick={() => (navigate("/login"))} label="Cancelar" />
                </div>
            </Card>
        </div>
    );
};
export default NewLogin;