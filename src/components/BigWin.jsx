import React from 'react';
import './MostPopular.css';
import game1 from '../assets/game/1080100411.webp';
import game2 from '../assets/game/1010100026.webp';
import game3 from '../assets/game/1010100110.webp';
import game4 from '../assets/game/1010200032.webp';
import game5 from '../assets/game/1100100009.webp';

const games = [
  { id: 1, title: 'Power of Orb', img: game4, badge: '+3456' },
  { id: 2, title: 'Jackpot Fishing', img: game5, badge: '+3456' },
  { id: 3, title: 'Ali Baba', img: game3, badge: '+3456' },
  { id: 4, title: 'Fortune Tree', img: game1, badge: '+3456' },
  { id: 5, title: 'Hawaii Beauty', img: game2, badge: '+3456' },
];

const BigWin = () => (
  <div className="section-block">
    <div className="section-header">
      <span className="section-icon" style={{ color: '#b388ff' }}><i className="fas fa-thumbs-up"></i></span>
      <span className="section-title">Recent Big Wins</span>
      <span className="section-seeall">See All <i className="fas fa-arrow-right"></i></span>
    </div>
    <div className="game-list">
      {games.map(game => (
        <div className="game-card" key={game.id}>
          <img src={game.img} alt={game.title} className="game-img" />
          <div className="game-badge">{game.badge}</div>
          <div className="game-title">{game.title}</div>
        </div>
      ))}
    </div>
  </div>
);

export default BigWin; 