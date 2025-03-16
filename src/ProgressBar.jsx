// components/ProgressBar/index.jsx
import './App.css';

const ProgressBar = ({ current, total }) => {
  const progress = (current / total) * 100;
  const progressPercentage = Math.round(progress);

  return (
    <div className="progress-container">
      <div className="progress-labels">
        <span className="progress-status">{progressPercentage}% Filled</span>
        <span className="progress-count">{current}/{total} Slots Available</span>
      </div>
      
      <div className="progress-track">
        <div 
          className="progress-bar" 
          style={{ width: `${progress}%` }}
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div className="progress-bar-glow"></div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;