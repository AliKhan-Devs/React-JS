import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Preview from './Preview';
import StylePanel from './StylePanel';
import CodePreview from './CodePreview';
import { convertStylesToCamelCase } from '../utils/cssUtils';

function InteractiveLab() {
  const [selectedElement, setSelectedElement] = useState('button');
  const [styles, setStyles] = useState({});

  const handleStyleChange = (property, value) => {
    setStyles((prevStyles) => ({
      ...prevStyles,
      [property]: value,
    }));
  };

  const handleElementSelect = (element) => {
    setSelectedElement(element);
    setStyles({});
  };

  return (
    <div className="flex-1 flex">
      <Sidebar
        selectedElement={selectedElement}
        onElementSelect={handleElementSelect}
      />
      <div className="flex-1 flex flex-col">
        <Preview styles={convertStylesToCamelCase(styles)} selectedElement={selectedElement} />
        <CodePreview styles={styles} selectedElement={selectedElement} />
      </div>
      <StylePanel styles={styles} onStyleChange={handleStyleChange} />
    </div>
  );
}

export default InteractiveLab;