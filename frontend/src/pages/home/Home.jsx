import React from "react";
import "./Home.css";
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const handleCardClick = (roomId) => {
        navigate(`/auction-room/${roomId}`);
    };

    const rooms = [
        { id: 1, title: "Sala de Leilão 1", description: "Descrição da Sala 1" },
        { id: 2, title: "Sala de Leilão 2", description: "Descrição da Sala 2" },
        { id: 3, title: "Sala de Leilão 3", description: "Descrição da Sala 3" }
    ];

    return (
        <div className="home-container">
            <div className="content-wrapper">
                <h1>Bem-vindo ao Leilão de NFT</h1>
                <p>Compre, venda e descubra NFTs únicos.</p>
                <button className="nft-button" onClick={() => (navigate("/"))}>Explorar Leilões</button>

                <div className="cards-container">
                    {rooms.map(room => (
                        <div key={room.id} className="nft-card">
                            <div className="card-image">
                                <img src={`https://via.placeholder.com/250x150?text=${room.title}`} alt={room.title} />
                            </div>
                            <div className="card-content">
                                <h2 className="card-title">{room.title}</h2>
                                <p className="card-description">{room.description}</p>
                                <button className="card-button" onClick={() => handleCardClick(room.id)}>Acessar Sala</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
