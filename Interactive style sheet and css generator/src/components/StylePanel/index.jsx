import React, { useState } from 'react';
import StyleSection from './StyleSection';
import { allProperties } from './styleProperties';

function StylePanel({ styles, onStyleChange }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filterProperties = (properties) => {
    return properties.filter(prop => 
      prop.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
      prop.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  return (
    <div className="w-96 bg-gray-800 h-screen overflow-y-auto p-4">
      <div className="sticky top-0 bg-gray-800 pb-4 z-10">
        <input
          type="text"
          placeholder="Search properties..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-3 py-2 bg-gray-700 text-white rounded-md mb-4"
        />
      </div>
      <div className="space-y-6">
        {Object.entries(allProperties).map(([category, properties]) => (
          <StyleSection
            key={category}
            title={category}
            properties={filterProperties(properties)}
            styles={styles}
            onStyleChange={onStyleChange}
          />
        ))}
      </div>
    </div>
  );
}

export default StylePanel;