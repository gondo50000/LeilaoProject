import React, { useState } from "react";
import "./Login.css";
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import {useNavigate} from 'react-router-dom';

const Login = () => {
    const [usuario, setUsuario] = useState({ email: "", password: "" });
    const navigate = useNavigate();

    const handleChange = (input) => {
        setUsuario({ ...usuario, [input.target.name]: input.target.value })
    };

    const login = () => {
        if (usuario.email == "eduardor.germano@hotmail.com" && usuario.password == "123") {
            let token = "token do backend"
            localStorage.setItem("token", token);
            localStorage.setItem("email", usuario.email);
            navigate("/");
        } else {
            alert("usuario ou senha incorretos");
        }
    }

    return (
        <div className="Body">
            <Card title="Login">
                <div className="grid">
                    <div className="field col-12">
                        <label for="E-Mail">E-Mail:</label><br />
                        <InputText onChange={handleChange} name="email" placeholder="E-Mail" />
                    </div>
                    <div className="field col-12">
                        <label for="password">Senha:</label><br />
                        <Password onChange={handleChange} name="password" id="password" feedback={false} placeholder="password" toggleMask />
                    </div>
                    <div className="col-fixed">
                        <Button onClick={login} label="Login" />
                    </div>
                    <div className="col-fixed">
                        <Button label="Recuperar Senha" />
                    </div>
                    <div className="col-fixed">
                        <Button label="Cadastrar-se" />
                    </div>
                </div>
            </Card>
        </div>
    );
}
export default Login;