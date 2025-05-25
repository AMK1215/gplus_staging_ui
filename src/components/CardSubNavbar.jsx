import React, { useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch';
import BASE_URL from '../hooks/baseURL';
import './CardSubNavbar.css';

const CardSubNavbar = ({ gameType, onProviderSelect }) => {
  const [selectedProvider, setSelectedProvider] = useState(null);

  const { data, loading, error } = useFetch(
    gameType ? `${BASE_URL}/providers/${gameType.code}` : null
  );

  useEffect(() => {
    setSelectedProvider(null);
  }, [data]);

  const handleProviderClick = (provider) => {
    setSelectedProvider(provider);
    onProviderSelect(provider);
  };

  if (!gameType) return null;

  return (
    <div className="card-subnavbar">
      {loading && <span style={{ color: '#ffd700' }}>Loading providers...</span>}
      {error && <span style={{ color: 'red' }}>Failed to load providers</span>}
      {data?.map((provider) => (
        <button
          key={provider.id}
          className={`provider-btn ${selectedProvider?.id === provider.id ? 'active' : ''}`}
          onClick={() => handleProviderClick(provider)}
        >
          {provider.img_url && (
            <img
              src={`https://luckymillion.pro${provider.img_url}`}
              alt={provider.product_title}
              className="provider-img"
            />
          )}
          {provider.product_title}
        </button>
      ))}
    </div>
  );
};

export default CardSubNavbar; 