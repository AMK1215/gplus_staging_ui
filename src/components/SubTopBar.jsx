import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SubTopBar.css';
import useFetch from '../hooks/useFetch';
import BASE_URL from '../hooks/baseURL';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Card', path: '/games' },
  { label: 'Slot' },
  { label: 'Fishing' },
  { label: 'Casino' },
  { label: 'Table' },
  { label: 'Bingo' },
];

const SubTopBar = () => {
  const navigate = useNavigate();
  const { data: gameTypes, loading, error } = useFetch(BASE_URL + '/game_types');

  const handleGameTypeClick = (gameType) => {
    navigate('/games', { state: { gameType } });
  };

  return (
    <div className="subtopbar-outer">
      <div className="subtopbar">
        {loading && <span style={{ color: '#ffd700' }}>Loading...</span>}
        {error && <span style={{ color: 'red' }}>Failed to load game types</span>}
        {Array.isArray(gameTypes) && gameTypes.map((item) => (
          <button 
            key={item.id} 
            className="subtopbar-btn"
            onClick={() => handleGameTypeClick(item)}
          >
            {item.img && (
              <img
                src={`https://luckymillion.pro${item.img}`}
                alt={item.name}
                style={{ height: 24, width: 24, marginRight: 8, verticalAlign: 'middle' }}
              />
            )}
            {item.name}
          </button>
        ))}
        <button className="subtopbar-btn logs-btn">
          <i className="fas fa-heart me-2"></i>Game Logs
        </button>
      </div>
    </div>
  );
};

export default SubTopBar; 