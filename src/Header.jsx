// components/Header.jsx
import { FiSearch } from 'react-icons/fi';

const Header = ({ searchQuery, onSearch }) => {
  return (
    <header className="app-header">
      <div className="header-content">
        <h1 className="logo">Wobb Campaigns</h1>
        <div className="search-bar">
          <FiSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search campaigns..."
            value={searchQuery}
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;