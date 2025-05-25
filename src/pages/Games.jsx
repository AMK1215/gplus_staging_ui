import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SubTopBar from '../components/SubTopBar';
import CardSubNavbar from '../components/CardSubNavbar';
import CardGame from '../components/CardGame';
import './Games.css';

const Games = () => {
  const location = useLocation();
  const gameType = location.state?.gameType;
  const [selectedProvider, setSelectedProvider] = useState(null);

  console.log('Game Type in Games page:', gameType);

  const handleProviderSelect = (provider) => {
    console.log('Provider selected in Games page:', provider);
    setSelectedProvider(provider);
  };

  // Reset selected provider when game type changes
  useEffect(() => {
    setSelectedProvider(null);
  }, [gameType]);

  return (
    <div className="games-page">
      <SubTopBar />
      {gameType && (
        <>
          <CardSubNavbar gameType={gameType} onProviderSelect={handleProviderSelect} />
          {selectedProvider && (
            <CardGame selectedProvider={selectedProvider} gameType={gameType} />
          )}
        </>
      )}
    </div>
  );
};

export default Games; 