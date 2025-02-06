import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { css } from '@codemirror/lang-css';
import { vscodeDark } from '@uiw/codemirror-theme-vscode';

function CodePreview({ styles, selectedElement }) {
  const getDefaultStyles = () => {
    switch (selectedElement) {
      case 'button':
        return `
  /* Modern Button Styles */
  padding: 10px 20px;
  background-color: #3B82F6;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s ease;
  &:hover {
    background-color: #2563EB;
    transform: translateY(-1px);
  }`;
      case 'grid':
        return `
  /* Grid Container */
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px;
  background-color: #F3F4F6;
  border-radius: 8px;`;
      case 'image':
        return `
  /* Responsive Image */
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);`;
      default:
        return '';
    }
  };

  const generateCSS = () => {
    const customStyles = Object.entries(styles)
      .map(([property, value]) => `  ${property}: ${value};`)
      .join('\n');
    
    return `.${selectedElement} {\n${customStyles}${getDefaultStyles()}\n}`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateCSS());
  };

  return (
    <div className="bg-gray-900 p-4">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-white">Generated CSS</h3>
        <button 
          onClick={handleCopy}
          className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Copy CSS
        </button>
      </div>
      <CodeMirror
        value={generateCSS()}
        height="200px"
        theme={vscodeDark}
        extensions={[css()]}
        editable={false}
      />
    </div>
  );
}

export default CodePreview;