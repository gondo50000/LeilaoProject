import React from "react";
import "./Home.css";
import { useNavigate } from 'react-router-dom';
import { Card } from 'primereact/card';

const Home = () => {
    const navigate = useNavigate();

    const cardData = [
        { title: 'Sala de Leilão 1', description: 'Descrição da Sala de Leilão 1', imgSrc: 'https://via.placeholder.com/150' },
        { title: 'Sala de Leilão 2', description: 'Descrição da Sala de Leilão 2', imgSrc: 'https://via.placeholder.com/150' },
        { title: 'Sala de Leilão 3', description: 'Descrição da Sala de Leilão 3', imgSrc: 'https://via.placeholder.com/150' },
        { title: 'Sala de Leilão 4', description: 'Descrição da Sala de Leilão 4', imgSrc: 'https://via.placeholder.com/150' }
    ];

    return (
        <div className="home-container">
            <br/>
            <br/>
            <h1>Bem-vindo ao Leilão de NFT</h1>
            <p>Compre, venda e descubra NFTs únicos.</p>
            <button className="nft-button" onClick={() => (navigate("/"))}>Explorar Leilões</button>
            <div className="cards-container">
                {cardData.map((card, index) => (
                    <Card key={index} title={card.title} className="nft-card">
                        <img src={card.imgSrc} alt={card.title} className="card-image" />
                        <p>{card.description}</p>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default Home;
