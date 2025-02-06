import React, { useState } from 'react';
import { HexColorPicker } from 'react-colorful';

function StyleProperty({ property, value, onChange }) {
  const [showColorPicker, setShowColorPicker] = useState(false);

  const handleRangeChange = (e) => {
    const newValue = e.target.value;
    onChange(property.unit ? `${newValue}${property.unit}` : newValue);
  };

  const renderInput = () => {
    switch (property.type) {
      case 'range':
        return (
          <div className="flex items-center space-x-2">
            <input
              type="range"
              min={property.min}
              max={property.max}
              step={property.step}
              value={parseFloat(value) || property.default}
              onChange={handleRangeChange}
              className="flex-1 accent-blue-600"
            />
            <div className="flex items-center space-x-1">
              <input
                type="number"
                value={parseFloat(value) || property.default}
                onChange={handleRangeChange}
                className="w-16 bg-gray-700 text-white rounded px-2 py-1 text-sm"
              />
              <span className="text-gray-400 text-sm">{property.unit}</span>
            </div>
          </div>
        );
      
      case 'color':
        return (
          <div className="relative">
            <div className="flex items-center space-x-2">
              <div
                className="w-8 h-8 rounded border border-gray-600 cursor-pointer"
                style={{ backgroundColor: value || '#ffffff' }}
                onClick={() => setShowColorPicker(!showColorPicker)}
              />
              <input
                type="text"
                value={value || ''}
                onChange={(e) => onChange(e.target.value)}
                className="flex-1 bg-gray-700 text-white rounded px-2 py-1"
              />
            </div>
            {showColorPicker && (
              <div className="absolute z-10 mt-2">
                <div 
                  className="fixed inset-0" 
                  onClick={() => setShowColorPicker(false)}
                />
                <HexColorPicker
                  color={value || '#ffffff'}
                  onChange={onChange}
                />
              </div>
            )}
          </div>
        );
      
      case 'select':
        return (
          <select
            value={value || ''}
            onChange={(e) => onChange(e.target.value)}
            className="w-full bg-gray-700 text-white rounded px-2 py-1"
          >
            <option value="">Select...</option>
            {property.options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        );
      
      default:
        return (
          <input
            type="text"
            value={value || ''}
            onChange={(e) => onChange(e.target.value)}
            className="w-full bg-gray-700 text-white rounded px-2 py-1"
          />
        );
    }
  };

  return (
    <div className="space-y-1">
      <label className="text-sm text-gray-300">{property.label}</label>
      {renderInput()}
    </div>
  );
}

export default StyleProperty;