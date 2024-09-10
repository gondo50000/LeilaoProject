import React from "react";
import "./Header.css";
import { Menubar } from 'primereact/menubar';
import Logout from "../logout/Logout";
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const logout = Logout();
    const navigate = useNavigate();

    const items = [
        {
            label: 'Home',
            icon: 'pi pi-home',
            command: () => navigate('/')
        },
        {
            label: 'Leilão',
            icon: 'pi pi-search',
            items: [
                {
                    label: 'Meus NFTs',
                    icon: 'pi pi-bolt',
                    command: () => navigate('/meus-nfts')
                },
                {
                    label: 'Salas de Leilão',
                    icon: 'pi pi-server',
                    command: () => navigate('/salas-leilao')
                },
                {
                    label: 'Salas Favoritas',
                    icon: 'pi pi-star',
                    command: () => navigate('/salas-favoritas')
                },
            ]
        },
        {
            label: 'Perfil',
            icon: 'pi pi-user',
            items: [
                {
                    label: 'Alterar Senha',
                    icon: 'pi pi-lock',
                    command: () => navigate('/changepassword')
                },
                {
                    label: 'Informações Pessoais',
                    icon: 'pi pi-file-edit',
                    command: () => navigate('/profile')
                }
            ]
        },
        {
            label: 'Sair',
            icon: 'pi pi-sign-out',
            command: logout,
        }
    ];

    return (
        <div className="header">
            <div className="card">
                <Menubar model={items} />
            </div>
        </div>
    );
}

export default Header;
