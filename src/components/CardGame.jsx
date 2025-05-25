import React, { useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch';
import BASE_URL from '../hooks/baseURL';
import './CardGame.css';
import { FaSearch, FaTimes } from 'react-icons/fa';

const CardGame = ({ selectedProvider, gameType, providers = [] }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [providerFilter, setProviderFilter] = useState(selectedProvider?.id || '');
  const [launchingGameId, setLaunchingGameId] = useState(null);
  const [launchError, setLaunchError] = useState('');

  useEffect(() => {
    setProviderFilter(selectedProvider?.id || '');
  }, [selectedProvider]);

  // Filtered provider for API
  const activeProvider = providers.find(p => p.id === providerFilter) || selectedProvider;

  const apiUrl = activeProvider && gameType
    ? `${BASE_URL}/game_lists/${gameType.id}/${activeProvider.id}${searchQuery ? `?game_name=${encodeURIComponent(searchQuery)}` : ''}`
    : null;

  const { data: games, loading, error } = useFetch(apiUrl);

  const PAGE_SIZE = 12;
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  useEffect(() => {
    setVisibleCount(PAGE_SIZE); // Reset when games, search, or provider changes
  }, [games, searchQuery, providerFilter]);

  // Launch game handler
  const handleLaunchGame = async (game) => {
    setLaunchingGameId(game.id);
    setLaunchError('');
    try {
      const res = await fetch(`${BASE_URL}/seamless/launch-game`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token'),
        },
        body: JSON.stringify({
          game_code: game.game_code,
          product_code: game.product_code,
          game_type: game.game_type,
        }),
      });
      const result = await res.json();
      if (result.code === 200 && result.url) {
        window.open(result.url, '_blank', 'noopener');
      } else {
        setLaunchError(result.message || 'Failed to launch game.');
      }
    } catch (e) {
      setLaunchError('Network error. Please try again.');
    } finally {
      setLaunchingGameId(null);
    }
  };

  // UI for search and filter
  return (
    <div className="card-game-container">
      <div className="search-filter-bar">
        <div className="search-container">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search games..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="game-search-input"
          />
          {searchQuery && (
            <button className="clear-search-btn" onClick={() => setSearchQuery('')}><FaTimes /></button>
          )}
        </div>
        {providers.length > 1 && (
          <select
            className="provider-filter-dropdown"
            value={providerFilter}
            onChange={e => setProviderFilter(Number(e.target.value))}
          >
            {providers.map(p => (
              <option key={p.id} value={p.id}>{p.product_title || p.provider || p.product_name}</option>
            ))}
          </select>
        )}
      </div>

      {loading && <div className="loading">Loading games...</div>}
      {error && <div className="error">Failed to load games: {error.message}</div>}
      {launchError && <div className="error" style={{marginBottom: 16}}>{launchError}</div>}
      {!loading && !error && (!games || games.length === 0) && (
        <div className="no-games">No games found for this provider</div>
      )}

      <div className="games-grid improved-ui">
        {games?.slice(0, visibleCount).map((game) => (
          <div
            key={game.id}
            className={`game-card improved-card${launchingGameId === game.id ? ' launching' : ''}`}
            onClick={() => handleLaunchGame(game)}
            style={{ cursor: 'pointer', position: 'relative' }}
            tabIndex={0}
            aria-label={`Launch ${game.game_name}`}
          >
            <div className="game-image">
              <img src={game.image_url} alt={game.game_name} />
              {launchingGameId === game.id && (
                <div className="launching-overlay">
                  <div className="spinner"></div>
                  <span>Launching...</span>
                </div>
              )}
            </div>
            <div className="game-info">
              <h3>{game.game_name}</h3>
              <p className="provider">{game.provider}</p>
            </div>
          </div>
        ))}
      </div>
      {games && visibleCount < games.length && !loading && (
        <div className="load-more-container">
          <button className="load-more-btn" onClick={() => setVisibleCount(c => c + PAGE_SIZE)}>
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default CardGame; 