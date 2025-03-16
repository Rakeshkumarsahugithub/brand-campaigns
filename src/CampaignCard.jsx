// components/CampaignCard/index.jsx
import { FiUsers, FiClock, FiArrowRight } from 'react-icons/fi';
import ProgressBar from './ProgressBar';
import './App.css';

const CampaignCard = ({ brand, payout, progress, duration }) => {
  const getPayoutColor = () => {
    switch(payout.type) {
      case 'fixed': return 'var(--color-fixed)';
      case 'barter': return 'var(--color-barter)';
      case 'refund': return 'var(--color-refund)';
      default: return 'var(--color-default)';
    }
  };

  

  return (
    <article className="campaign-card">
      <div className="card-media">
        <img 
          src={brand.logo} 
          alt={brand.name} 
          className="campaign-image"
          loading="lazy"
        />
        <div className="campaign-overlay">
          <span className="payout-type" style={{ backgroundColor: getPayoutColor() }}>
            {payout.type.toUpperCase()}
          </span>
        </div>
      </div>

      <div className="card-content">
        <div className="brand-header">
          <img src={brand.logo} alt={brand.name} className="brand-logo" />
          <div>
            <h3 className="brand-name">{brand.name}</h3>
            <p className="payout-value">
            
              {payout.value}
            </p>
          </div>
        </div>

        <p className="brand-description">{brand.description}</p>

        <div className="campaign-stats">
          <div className="stat-item">
            <FiUsers className="stat-icon" />
            <div>
              <span className="stat-value">{progress.hired}/{progress.total}</span>
              <span className="stat-label">Hired</span>
            </div>
          </div>
          
          <div className="stat-item">
            <FiClock className="stat-icon" />
            <div>
              <span className="stat-value">{duration.split(' ')[0]}</span>
              <span className="stat-label">Days Left</span>
            </div>
          </div>
        </div>

        <div className="progress-section">
          <ProgressBar current={progress.hired} total={progress.total} />
        
        </div>

        <button className="cta-button">
          View Details <FiArrowRight className="cta-icon" />
        </button>
      </div>
    </article>
  );
};

export default CampaignCard;