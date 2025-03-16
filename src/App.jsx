// App.js
import { useState } from 'react';
import useCampaigns from './useCampaigns';
import CampaignCard from './CampaignCard';
import Header from './Header';
import { FaSpinner } from 'react-icons/fa';
import './App.css';

const App = () => {
  const { campaigns, loading, error } = useCampaigns();
  const [searchQuery, setSearchQuery] = useState('');

  if (error) return <div className="error-message">Error: {error}</div>;

  return (
    <div className="app-container">
      <Header searchQuery={searchQuery} onSearch={setSearchQuery} />
      
      <main className="main-content">
        {loading ? (
          <div className="loading-spinner">
          <FaSpinner className="spinner-icon" /></div>
        ) : (
          <div className="campaigns-grid">
            {campaigns
              .filter(campaign => 
                campaign.brand.name.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map(campaign => (
                <CampaignCard key={campaign.id} {...campaign} />
              ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default App;