import React from "react";
import "./Profile.css";
import { InputText } from "primereact/inputtext";

const Profile = () => {
    const handleChange = () => {
    };

    return (
        <div className="profile-container">
            <h1>Perfil do Usuário</h1>
            <div className="input-field">
                <label className="input-label" htmlFor="nome">Nome</label>
                <InputText id="nome" onChange={handleChange} name="nome" placeholder="Nome" />
            </div>
            <div className="input-field">
                <label className="input-label" htmlFor="sobre-nome">Sobrenome</label>
                <InputText id="sobre-nome" onChange={handleChange} name="sobre-nome" placeholder="Sobrenome" />
            </div>
            <div className="input-field">
                <label className="input-label" htmlFor="cpf">CPF</label>
                <InputText id="cpf" onChange={handleChange} name="cpf" placeholder="CPF" />
            </div>
            <div className="input-field">
                <label className="input-label" htmlFor="email">E-Mail</label>
                <InputText id="email" onChange={handleChange} name="email" placeholder="E-Mail" />
            </div>
            <div className="input-field">
                <label className="input-label" htmlFor="cep">CEP</label>
                <InputText id="cep" onChange={handleChange} name="cep" placeholder="CEP" />
            </div>
            <div className="input-field">
                <label className="input-label" htmlFor="endereco">Endereço</label>
                <InputText id="endereco" onChange={handleChange} name="endereco" placeholder="Endereço" />
            </div>
        </div>
    );
};

export default Profile;
