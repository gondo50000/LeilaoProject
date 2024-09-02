import React, { useState } from "react";
import "./Login.css";
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { Router, useNavigate } from 'react-router-dom';

const Login = () => {
    const [usuario, setUsuario] = useState({ email: "", password: "" });
    const navigate = useNavigate();

    const handleChange = (input) => {
        setUsuario({ ...usuario, [input.target.name]: input.target.value });
    };

    const login = () => {
        if (usuario.email === "eduardor.germano@hotmail.com" && usuario.password === "123") {
            let token = "token do backend";
            localStorage.setItem("token", token);
            localStorage.setItem("email", usuario.email);
            navigate("/");
        } else {
            alert("Usuário ou senha incorretos");
        }
    };

    return (
        <div className="Body">
            <Card title="Login">
                <div className="grid">
                    <div className="email">
                        <label htmlFor="E-Mail">E-Mail:</label>
                        <InputText onChange={handleChange} name="email" placeholder="E-Mail" />
                    </div>
                    <div className="password">
                        <label htmlFor="password">Senha:</label>
                        <Password onChange={handleChange} name="password" id="password" feedback={false} placeholder="Senha" toggleMask />
                    </div>
                    <div className="button-container">
                        <Button onClick={login} label="Login" className="p-button" />
                        <Button onClick={() => (navigate("/recopassoword"))} label="Recuperar Senha" className="p-button" />
                        <Button onClick={() => (navigate("/newlogin"))} label="Cadastrar-se" className="p-button" />
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default Login;
