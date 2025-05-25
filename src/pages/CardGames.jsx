import React, { useState } from 'react';
import TopBar from '../components/TopBar';
import SubTopBar from '../components/SubTopBar';
import CardSubNavBar from './CardSubNavBar';
import './CardGames.css';
import bingo1 from '../assets/game_list/Bingo_1.png';
import bingo2 from '../assets/game_list/Bingo_2.png';
import bingo3 from '../assets/game_list/Bingo_3.png';
import bingo4 from '../assets/game_list/Bingo_4.png';
import bingo5 from '../assets/game_list/Bingo_5.png';
import bingo6 from '../assets/game_list/Bingo_6.png';
import bingo10 from '../assets/game_list/Bingo_10.png';
import bonusHunter from '../assets/game_list/Bonus_Hunter.png';
import bookOfGold from '../assets/game_list/Book_of_Gold.png';
import boxingKing from '../assets/game_list/Boxing_King.png';
import bubbleBeauty from '../assets/game_list/Bubble_Beauty.png';
import candyBaby from '../assets/game_list/Candy_Baby.png';
import chargeBuffalo from '../assets/game_list/Charge_Buffalo.png';
import agentAce from '../assets/game_list/Agent_Ace.png';
import aliBaba from '../assets/game_list/Ali_Baba.png';
import arenaFighter from '../assets/game_list/Arena_Fighter.png';
import aztecPriestess from '../assets/game_list/Aztec_Priestess.png';

const games = [
  { id: 1, title: 'Bingo 1', img: bingo1 },
  { id: 2, title: 'Bingo 2', img: bingo2 },
  { id: 3, title: 'Bingo 3', img: bingo3 },
  { id: 4, title: 'Bingo 4', img: bingo4 },
  { id: 5, title: 'Bingo 5', img: bingo5 },
  { id: 6, title: 'Bingo 6', img: bingo6 },
  { id: 7, title: 'Bingo 10', img: bingo10 },
  { id: 8, title: 'Bonus Hunter', img: bonusHunter },
  { id: 9, title: 'Book of Gold', img: bookOfGold },
  { id: 10, title: 'Boxing King', img: boxingKing },
  { id: 11, title: 'Bubble Beauty', img: bubbleBeauty },
  { id: 12, title: 'Candy Baby', img: candyBaby },
  { id: 13, title: 'Charge Buffalo', img: chargeBuffalo },
  { id: 14, title: 'Agent Ace', img: agentAce },
  { id: 15, title: 'Ali Baba', img: aliBaba },
  { id: 16, title: 'Arena Fighter', img: arenaFighter },
  { id: 17, title: 'Aztec Priestess', img: aztecPriestess },
];

const PAGE_SIZE = 8;

const CardGames = () => {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + PAGE_SIZE);
  };

  return (
    <div>
      <TopBar />
      <SubTopBar activeTab="Card" />
      <CardSubNavBar />
      <div className="section-block">
        <div className="section-header">
          <span className="section-icon"><i className="fas fa-trophy"></i></span>
          <span className="section-title">Card Games</span>
          <span className="section-seeall">See All <i className="fas fa-arrow-right"></i></span>
        </div>
        <div className="card-games-grid">
          {games.slice(0, visibleCount).map(game => (
            <div className="game-card" key={game.id}>
              <img src={game.img} alt={game.title} className="game-img" />
              <div className="game-title">{game.title}</div>
            </div>
          ))}
        </div>
        {visibleCount < games.length && (
          <div className="load-more-container">
            <button className="load-more-btn" onClick={handleLoadMore}>
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardGames; 