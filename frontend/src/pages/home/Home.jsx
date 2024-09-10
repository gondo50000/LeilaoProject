import React from "react";
import "./Home.css";
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="home-container">
            <h1>Bem-vindo ao Leilão de NFT</h1>
            <p>Compre, venda e descubra NFTs únicos.</p>
            <button className="nft-button" onClick={() => (navigate("/"))}>Explorar Leilões</button>
        </div>
    );
}

export default Home;
