import React, { useEffect, useState } from 'react';
import './DailyBoard.css';
import winnerImg from '../assets/daily_broad/winner-h87HN-rL.png';

const sampleData = [
  { id: 1, game: 'Dragon Gold 6888', user: '@htoo', amount: '80,000 Ks', img: winnerImg },
  { id: 2, game: 'Dragon Gold 6888', user: '@htoo', amount: '80,000 Ks', img: winnerImg },
  { id: 3, game: 'Dragon Gold 6888', user: '@htoo', amount: '80,000 Ks', img: winnerImg },
  { id: 4, game: 'Dragon Gold 6888', user: '@htoo', amount: '80,000 Ks', img: winnerImg },
];

const DailyBoard = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="daily-board-outer">
      <div className="daily-board">
        <div className="daily-board-header">
          <span>Daily Board</span>
          <span className="daily-board-time">{time.toLocaleTimeString()}</span>
        </div>
        <div className="daily-board-list">
          {sampleData.map(item => (
            <div className="daily-board-item" key={item.id}>
              <img src={item.img} alt={item.game} className="daily-board-img" />
              <span className="daily-board-game">{item.game}</span>
              <span className="daily-board-user">{item.user}</span>
              <span className="daily-board-amount">{item.amount}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DailyBoard; 