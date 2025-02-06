import React from 'react';
import { FaTrash, FaCopy, FaCode } from 'react-icons/fa';
import useStyleStore from '../store/styleStore';
import toast from 'react-hot-toast';

function SavedStyles({ isOpen, onClose }) {
  const { savedStyles, removeStyle } = useStyleStore();

  const handleCopyStyle = (style) => {
    const cssString = Object.entries(style.styles)
      .map(([key, value]) => `${key}: ${value};`)
      .join('\n');
    navigator.clipboard.writeText(cssString);
    toast.success('Style copied to clipboard!');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white dark:bg-gray-800 rounded-lg w-full max-w-2xl p-6 m-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Saved Styles</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            ✕
          </button>
        </div>

        {savedStyles.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-400 text-center py-8">
            No saved styles yet. Start creating and saving your styles!
          </p>
        ) : (
          <div className="space-y-4 max-h-[60vh] overflow-y-auto">
            {savedStyles.map((style) => (
              <div
                key={style.id}
                className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 flex items-start justify-between"
              >
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {style.elementType} Style
                  </h3>
                  <div className="space-y-1">
                    {Object.entries(style.styles).map(([key, value]) => (
                      <div key={key} className="text-sm text-gray-600 dark:text-gray-300">
                        <code>{key}: {value};</code>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex space-x-2 ml-4">
                  <button
                    onClick={() => handleCopyStyle(style)}
                    className="p-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    title="Copy CSS"
                  >
                    <FaCopy />
                  </button>
                  <button
                    onClick={() => {
                      removeStyle(style.id);
                      toast.success('Style deleted!');
                    }}
                    className="p-2 text-red-500 hover:text-red-700"
                    title="Delete"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default SavedStyles;