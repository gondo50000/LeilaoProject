import React from "react";
import "./RecoPassoword.css";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";

const RecoPassoword = () => {
    const navigate = useNavigate();

    return (
        <div className="Body">
            <Card title="recoPassoword">
                <div className="grid">
                    <div className="email">
                        <label htmlFor="E-Mail">E-Mail:</label>
                        <InputText name="email" placeholder="E-Mail" />
                    </div>
                    <div className="button-container">
                        <Button label="Recuperar Senha" className="p-button" />
                        <Button onClick={() => (navigate("/login"))} label="Cancelar" className="p-button" />
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default RecoPassoword;