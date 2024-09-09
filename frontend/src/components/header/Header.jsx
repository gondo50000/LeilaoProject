import React from "react";
import "./Header.css";
import { Menubar } from 'primereact/menubar';
import Logout from "../logout/Logout";

const Header = () =>{
    const logout = Logout();
    const items = [
        {
            label: 'Home',
            icon: 'pi pi-home'
        },
        {
            label: 'Leilão',
            icon: 'pi pi-search',
            items: [
                {
                    label: 'Meus NFTs',
                    icon: 'pi pi-bolt'
                },
                {
                    label: 'Salas de Leilão',
                    icon: 'pi pi-server'
                },
                {
                    label: 'Salas Favoritas',
                    icon: 'pi pi-star'
                },
            ]
        },
        {
            label: 'Perfil',
            icon: 'pi pi-user',
            items: [
                {
                    label: 'Alterar Senha',
                    icon: 'pi pi-lock'
                },
                {
                    label: 'Informações Pessoais',
                    icon: 'pi pi-file-edit'
                }
            ]
        },
        {
            label: 'Sair',
            icon: 'pi pi-sign-out',
            command: logout,
        }
    ];

    return(
        <div className="header">
            <div className="card">
                <Menubar model={items} />
            </div>
        </div>
    );
}
export default Header;