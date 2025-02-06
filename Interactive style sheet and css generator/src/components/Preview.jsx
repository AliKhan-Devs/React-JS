import React from 'react';

function Preview({ styles, selectedElement }) {
  const renderPreviewElement = () => {
    // Apply common styles with proper shadow handling
    const commonStyles = {
      ...styles,
      display: styles.display || 'flex',
      alignItems: styles.alignItems || 'center',
      justifyContent: styles.justifyContent || 'center'
    };

    switch (selectedElement) {
      case 'button':
        return (
          <button style={commonStyles} className="preview-element">
            <span>Click Me</span>
          </button>
        );
      case 'container':
        return (
          <div style={commonStyles} className="preview-element min-w-[200px] min-h-[200px] bg-white/10">
            <span>Container Content</span>
          </div>
        );
      case 'image':
        return (
          <img
            src="https://picsum.photos/300/200"
            alt="Preview"
            style={styles}
            className="preview-element"
          />
        );
      case 'grid':
        // Use a single gap property instead of separate row and column gaps
        const gridStyles = {
          ...styles,
          display: 'grid',
          gridTemplateColumns: styles.gridTemplateColumns || 'repeat(3, minmax(100px, 1fr))',
          gap: styles.gap || '1rem', // Use single gap property
          padding: styles.padding || '1rem',
          maxWidth: '800px',
          margin: '0 auto',
          backgroundColor: styles.backgroundColor || 'rgba(30, 30, 30, 0.5)',
          borderRadius: styles.borderRadius || '0.5rem'
        };

        // Remove individual gap properties to avoid conflicts
        delete gridStyles.gridRowGap;
        delete gridStyles.gridColumnGap;

        return (
          <div style={gridStyles} className="preview-element">
            {Array(9).fill(null).map((_, index) => (
              <div
                key={index}
                className="bg-purple-500/20 p-4 text-white rounded border border-purple-500/30 hover:bg-purple-500/30 transition-all"
                style={{
                  minHeight: '80px',
                  minWidth: '80px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                Item {index + 1}
              </div>
            ))}
          </div>
        );
      case 'text':
        return (
          <p style={styles} className="preview-element">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        );
      case 'link':
        return (
          <a href="#" style={commonStyles} className="preview-element">
            <span>Sample Link</span>
          </a>
        );
      case 'list':
        return (
          <ul style={styles} className="preview-element">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        );
      case 'table':
        return (
          <table style={styles} className="preview-element">
            <thead>
              <tr>
                <th>Header 1</th>
                <th>Header 2</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Data 1</td>
                <td>Data 2</td>
              </tr>
            </tbody>
          </table>
        );
      case 'input':
        return (
          <input
            type="text"
            placeholder="Sample Input"
            style={styles}
            className="preview-element"
          />
        );
      case 'card':
        return (
          <div style={styles} className="preview-element p-6 bg-white/10 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Card Title</h3>
            <p>Card content goes here</p>
          </div>
        );
      default:
        return <div>Select an element to preview</div>;
    }
  };

  return (
    <div className="flex-1 bg-[#1E1E1E] p-8 overflow-auto">
      <div className="preview-container relative bg-[#2D2D2D] min-h-[500px] rounded-lg shadow-xl border border-gray-700">
        <div className="absolute inset-0 grid place-items-center p-8">
          {renderPreviewElement()}
        </div>
      </div>
    </div>
  );
}

export default Preview;