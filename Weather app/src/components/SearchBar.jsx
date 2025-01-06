import { useState } from 'react';
import { FiSearch, FiMapPin } from 'react-icons/fi';

export default function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      onSearch(searchTerm);
    }
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit} style={{ position: 'relative', width: '100%' }}>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for a city..."
        style={{ width: '100%', paddingLeft: '40px', paddingRight: '40px' }}
      />
      <FiMapPin style={{ cursor: 'pointer', position: 'absolute', left: '20px', top: '50%', transform: 'translateY(-50%)', color:'white', fontSize:'1.3rem' }} />
      <FiSearch onClick={handleSubmit} style={{ cursor: 'pointer', position: 'absolute', right: '20px', top: '50%', transform: 'translateY(-50%)' , color:'white',fontSize:'1.3rem',}} />
    </form>
  );
}
