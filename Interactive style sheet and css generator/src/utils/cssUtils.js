// Convert kebab-case to camelCase
export function toCamelCase(str) {
  return str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
}

// Convert style object keys from kebab-case to camelCase
export function convertStylesToCamelCase(styles) {
  const camelCaseStyles = {};
  
  // Process box shadow properties
  const shadowX = styles['box-shadow-x'] || '0px';
  const shadowY = styles['box-shadow-y'] || '0px';
  const shadowBlur = styles['box-shadow-blur'] || '0px';
  const shadowSpread = styles['box-shadow-spread'] || '0px';
  const shadowColor = styles['box-shadow-color'] || 'rgba(0, 0, 0, 0.5)';
  const shadowInset = styles['box-shadow-inset'] ? 'inset ' : '';
  
  if (shadowX || shadowY || shadowBlur || shadowSpread || shadowColor) {
    camelCaseStyles.boxShadow = `${shadowInset}${shadowX} ${shadowY} ${shadowBlur} ${shadowSpread} ${shadowColor}`;
  }

  // Process transform properties
  const transforms = [];
  if (styles['skew-x']) transforms.push(`skewX(${styles['skew-x']})`);
  if (styles['skew-y']) transforms.push(`skewY(${styles['skew-y']})`);
  if (styles.rotate) transforms.push(`rotate(${styles.rotate})`);
  if (styles.scale) transforms.push(`scale(${styles.scale})`);
  if (styles['translate-x']) transforms.push(`translateX(${styles['translate-x']})`);
  if (styles['translate-y']) transforms.push(`translateY(${styles['translate-y']})`);
  
  if (transforms.length > 0) {
    camelCaseStyles.transform = transforms.join(' ');
  }

  // Process all other styles
  Object.entries(styles).forEach(([key, value]) => {
    // Skip already processed properties
    if (
      !key.startsWith('box-shadow-') && 
      !key.startsWith('skew-') && 
      key !== 'rotate' && 
      key !== 'scale' && 
      !key.startsWith('translate-')
    ) {
      if (typeof value === 'string' && value.trim() !== '') {
        camelCaseStyles[toCamelCase(key)] = value;
      }
    }
  });

  return camelCaseStyles;
}