import React, { useState } from 'react';
import { 
  FaMousePointer,
  FaSquare,
  FaImage,
  FaTh,
  FaFont,
  FaLink,
  FaList,
  FaTable,
  FaSquareFull,
  FaKeyboard
} from 'react-icons/fa';

const elements = [
  { id: 'button', label: 'Button', icon: FaMousePointer },
  { id: 'container', label: 'Container', icon: FaSquare },
  { id: 'image', label: 'Image', icon: FaImage },
  { id: 'grid', label: 'Grid', icon: FaTh },
  { id: 'text', label: 'Text', icon: FaFont },
  { id: 'link', label: 'Link', icon: FaLink },
  { id: 'list', label: 'List', icon: FaList },
  { id: 'table', label: 'Table', icon: FaTable },
  { id: 'input', label: 'Input', icon: FaKeyboard },
  { id: 'card', label: 'Card', icon: FaSquareFull }
];

function Sidebar({ selectedElement, onElementSelect }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredElements = elements.filter(element =>
    element.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-64 bg-gray-800 h-full p-4">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search elements..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>
      <div className="space-y-2">
        {filteredElements.map((element) => {
          const Icon = element.icon;
          return (
            <button
              key={element.id}
              onClick={() => onElementSelect(element.id)}
              className={`w-full flex items-center space-x-3 px-4 py-2 rounded-md transition-colors ${
                selectedElement === element.id
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:bg-gray-700'
              }`}
            >
              <Icon className="text-lg" />
              <span>{element.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;