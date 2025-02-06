import React from 'react';
import StyleProperty from './StyleProperty';

function StyleSection({ title, properties, styles, onStyleChange }) {
  return (
    <div className="bg-gray-700 rounded-lg p-4">
      <h3 className="text-white text-lg font-semibold mb-4">{title}</h3>
      <div className="space-y-4">
        {properties.map((prop) => (
          <StyleProperty
            key={prop.name}
            property={prop}
            value={styles[prop.name]}
            onChange={(value) => onStyleChange(prop.name, value)}
          />
        ))}
      </div>
    </div>
  );
}

export default StyleSection;