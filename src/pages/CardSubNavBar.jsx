import React from 'react';
import './CardSubNavBar.css';

const tabs = [
  { label: 'All Games', active: true },
  { label: 'Popular Games' },
  { label: 'New Games' },
];

const providers = [
  'JILI', 'PG Soft', 'Pragmatic Play', 'JDB', 'CQ9', 'Kingmaker', 'Spadegaming', 'Red Tiger', 'KA Gaming', 'Yggdrasil'
];

const CardSubNavBar = () => (
  <div className="card-subnav-outer">
    <div className="card-subnav-tabs">
      {tabs.map(tab => (
        <button key={tab.label} className={`card-subnav-tab${tab.active ? ' active' : ''}`}>
          {tab.label}
        </button>
      ))}
      <input className="card-subnav-search" placeholder="Search..." />
    </div>
    <div className="card-subnav-providers">
      {providers.map(p => (
        <button key={p} className="card-subnav-provider">{p}</button>
      ))}
    </div>
  </div>
);

export default CardSubNavBar; 