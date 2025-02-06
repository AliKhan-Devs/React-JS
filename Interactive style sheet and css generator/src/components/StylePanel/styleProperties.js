// Helper functions for creating style properties
const createRangeProperty = (name, label, min = 0, max = 100, step = 1, unit = 'px', defaultValue = 0) => ({
  name,
  label,
  type: 'range',
  min,
  max,
  step,
  unit,
  default: defaultValue
});

const createColorProperty = (name, label) => ({
  name,
  label,
  type: 'color'
});

const createSelectProperty = (name, label, options) => ({
  name,
  label,
  type: 'select',
  options
});

export const allProperties = {
  Layout: [
    createSelectProperty('display', 'Display', [
      'block', 'inline', 'inline-block', 'flex', 'grid', 'none'
    ]),
    createSelectProperty('position', 'Position', [
      'static', 'relative', 'absolute', 'fixed', 'sticky'
    ]),
    createRangeProperty('width', 'Width', 0, 1000),
    createRangeProperty('height', 'Height', 0, 1000),
    createRangeProperty('top', 'Top', -500, 500),
    createRangeProperty('right', 'Right', -500, 500),
    createRangeProperty('bottom', 'Bottom', -500, 500),
    createRangeProperty('left', 'Left', -500, 500),
    createRangeProperty('z-index', 'Z-Index', -100, 100, 1, '', 0),
    createSelectProperty('float', 'Float', ['none', 'left', 'right']),
    createSelectProperty('clear', 'Clear', ['none', 'left', 'right', 'both']),
    createSelectProperty('overflow', 'Overflow', ['visible', 'hidden', 'scroll', 'auto']),
    createSelectProperty('overflow-x', 'Overflow X', ['visible', 'hidden', 'scroll', 'auto']),
    createSelectProperty('overflow-y', 'Overflow Y', ['visible', 'hidden', 'scroll', 'auto']),
    createSelectProperty('visibility', 'Visibility', ['visible', 'hidden', 'collapse']),
    createSelectProperty('box-sizing', 'Box Sizing', ['content-box', 'border-box']),
    createRangeProperty('min-width', 'Min Width', 0, 1000),
    createRangeProperty('max-width', 'Max Width', 0, 1000),
    createRangeProperty('min-height', 'Min Height', 0, 1000),
    createRangeProperty('max-height', 'Max Height', 0, 1000),
  ],

  Spacing: [
    createRangeProperty('margin', 'Margin', -100, 100),
    createRangeProperty('margin-top', 'Margin Top', -100, 100),
    createRangeProperty('margin-right', 'Margin Right', -100, 100),
    createRangeProperty('margin-bottom', 'Margin Bottom', -100, 100),
    createRangeProperty('margin-left', 'Margin Left', -100, 100),
    createRangeProperty('padding', 'Padding', 0, 100),
    createRangeProperty('padding-top', 'Padding Top', 0, 100),
    createRangeProperty('padding-right', 'Padding Right', 0, 100),
    createRangeProperty('padding-bottom', 'Padding Bottom', 0, 100),
    createRangeProperty('padding-left', 'Padding Left', 0, 100),
  ],

  Grid: [
    createSelectProperty('grid-template-columns', 'Grid Template Columns', [
      'none',
      'repeat(2, 1fr)',
      'repeat(3, 1fr)',
      'repeat(4, 1fr)',
      '1fr 2fr 1fr',
      'auto 1fr auto'
    ]),
    createSelectProperty('grid-template-rows', 'Grid Template Rows', [
      'none',
      'repeat(2, 1fr)',
      'repeat(3, 1fr)',
      'auto 1fr auto'
    ]),
    createRangeProperty('grid-row-gap', 'Grid Row Gap', 0, 50),
    createRangeProperty('grid-column-gap', 'Grid Column Gap', 0, 50),
    createSelectProperty('grid-template-areas', 'Grid Template Areas', [
      'none',
      '"header header" "main sidebar" "footer footer"'
    ]),
    createSelectProperty('grid-auto-rows', 'Grid Auto Rows', [
      'auto',
      'min-content',
      'max-content',
      'minmax(100px, auto)'
    ]),
    createSelectProperty('grid-auto-columns', 'Grid Auto Columns', [
      'auto',
      'min-content',
      'max-content',
      'minmax(100px, auto)'
    ]),
  ],

  Flex: [
    createSelectProperty('flex-direction', 'Flex Direction', [
      'row',
      'row-reverse',
      'column',
      'column-reverse'
    ]),
    createSelectProperty('flex-wrap', 'Flex Wrap', [
      'nowrap',
      'wrap',
      'wrap-reverse'
    ]),
    createSelectProperty('justify-content', 'Justify Content', [
      'flex-start',
      'flex-end',
      'center',
      'space-between',
      'space-around',
      'space-evenly'
    ]),
    createSelectProperty('align-items', 'Align Items', [
      'stretch',
      'flex-start',
      'flex-end',
      'center',
      'baseline'
    ]),
    createSelectProperty('align-content', 'Align Content', [
      'flex-start',
      'flex-end',
      'center',
      'space-between',
      'space-around',
      'stretch'
    ]),
    createSelectProperty('align-self', 'Align Self', [
      'auto',
      'flex-start',
      'flex-end',
      'center',
      'baseline',
      'stretch'
    ]),
    createRangeProperty('order', 'Order', -10, 10, 1, '', 0),
  ],

  Typography: [
    createColorProperty('color', 'Text Color'),
    createSelectProperty('font-family', 'Font Family', [
      'Arial, sans-serif',
      'Times New Roman, serif',
      'Courier New, monospace',
      'Georgia, serif',
      'Verdana, sans-serif'
    ]),
    createRangeProperty('font-size', 'Font Size', 8, 72),
    createSelectProperty('font-style', 'Font Style', [
      'normal',
      'italic',
      'oblique'
    ]),
    createSelectProperty('font-weight', 'Font Weight', [
      '100', '200', '300', '400', '500', '600', '700', '800', '900'
    ]),
    createSelectProperty('font-variant', 'Font Variant', [
      'normal',
      'small-caps'
    ]),
    createRangeProperty('line-height', 'Line Height', 0, 3, 0.1, '', 1),
    createRangeProperty('letter-spacing', 'Letter Spacing', -5, 10, 0.1, 'px'),
    createRangeProperty('word-spacing', 'Word Spacing', -5, 20, 0.1, 'px'),
    createSelectProperty('text-align', 'Text Align', [
      'left',
      'right',
      'center',
      'justify'
    ]),
    createSelectProperty('text-decoration', 'Text Decoration', [
      'none',
      'underline',
      'overline',
      'line-through'
    ]),
    createSelectProperty('text-transform', 'Text Transform', [
      'none',
      'capitalize',
      'uppercase',
      'lowercase'
    ]),
    createRangeProperty('text-indent', 'Text Indent', -50, 50),
    createSelectProperty('white-space', 'White Space', [
      'normal',
      'nowrap',
      'pre',
      'pre-wrap',
      'pre-line'
    ]),
    createSelectProperty('word-wrap', 'Word Wrap', [
      'normal',
      'break-word'
    ]),
    createSelectProperty('word-break', 'Word Break', [
      'normal',
      'break-all',
      'keep-all',
      'break-word'
    ]),
    createSelectProperty('vertical-align', 'Vertical Align', [
      'baseline',
      'sub',
      'super',
      'top',
      'middle',
      'bottom'
    ]),
  ],

  Background: [
    createColorProperty('background-color', 'Background Color'),
    createSelectProperty('background-image', 'Background Image', [
      'none',
      'url("example.jpg")',
      'linear-gradient(to right, #fff, #000)'
    ]),
    createSelectProperty('background-repeat', 'Background Repeat', [
      'repeat',
      'repeat-x',
      'repeat-y',
      'no-repeat'
    ]),
    createSelectProperty('background-attachment', 'Background Attachment', [
      'scroll',
      'fixed',
      'local'
    ]),
    createSelectProperty('background-position', 'Background Position', [
      'left top',
      'left center',
      'left bottom',
      'right top',
      'right center',
      'right bottom',
      'center top',
      'center center',
      'center bottom'
    ]),
    createSelectProperty('background-size', 'Background Size', [
      'auto',
      'cover',
      'contain',
      '100% 100%'
    ]),
    createSelectProperty('background-clip', 'Background Clip', [
      'border-box',
      'padding-box',
      'content-box'
    ]),
    createSelectProperty('background-origin', 'Background Origin', [
      'border-box',
      'padding-box',
      'content-box'
    ]),
  ],

  Border: [
    createRangeProperty('border-width', 'Border Width', 0, 20),
    createSelectProperty('border-style', 'Border Style', [
      'none',
      'solid',
      'dashed',
      'dotted',
      'double',
      'groove',
      'ridge',
      'inset',
      'outset'
    ]),
    createColorProperty('border-color', 'Border Color'),
    createRangeProperty('border-radius', 'Border Radius', 0, 100),
    createRangeProperty('border-top-left-radius', 'Border Radius Top Left', 0, 100),
    createRangeProperty('border-top-right-radius', 'Border Radius Top Right', 0, 100),
    createRangeProperty('border-bottom-right-radius', 'Border Radius Bottom Right', 0, 100),
    createRangeProperty('border-bottom-left-radius', 'Border Radius Bottom Left', 0, 100),
  ],

  BoxShadow: [
    createRangeProperty('box-shadow-x', 'Offset X', -50, 50, 1, 'px'),
    createRangeProperty('box-shadow-y', 'Offset Y', -50, 50, 1, 'px'),
    createRangeProperty('box-shadow-blur', 'Blur Radius', 0, 100, 1, 'px'),
    createRangeProperty('box-shadow-spread', 'Spread Radius', -50, 50, 1, 'px'),
    createColorProperty('box-shadow-color', 'Shadow Color'),
    createSelectProperty('box-shadow-inset', 'Shadow Type', ['', 'inset']),
  ],

  Transform: [
    createRangeProperty('rotate', 'Rotate', -360, 360, 1, 'deg'),
    createRangeProperty('skew-x', 'Skew X', -90, 90, 1, 'deg'),
    createRangeProperty('skew-y', 'Skew Y', -90, 90, 1, 'deg'),
    createRangeProperty('scale', 'Scale', 0, 2, 0.1, ''),
    createRangeProperty('translate-x', 'Translate X', -100, 100, 1, 'px'),
    createRangeProperty('translate-y', 'Translate Y', -100, 100, 1, 'px'),
    createSelectProperty('transform-origin', 'Transform Origin', [
      'center',
      'top left',
      'top right',
      'bottom left',
      'bottom right'
    ]),
  ],

  Animation: [
    createSelectProperty('animation', 'Animation', [
      'none',
      'bounce 1s infinite',
      'fade 1s ease-in',
      'slide 2s ease-out',
      'rotate 2s linear infinite',
      'scale 2s ease-in-out infinite',
      'shake 0.5s ease-in-out',
      'pulse 1.5s ease-in-out infinite'
    ]),
    createRangeProperty('animation-duration', 'Duration', 0, 10, 0.1, 's'),
    createSelectProperty('animation-timing-function', 'Timing Function', [
      'linear',
      'ease',
      'ease-in',
      'ease-out',
      'ease-in-out'
    ]),
    createRangeProperty('animation-delay', 'Delay', 0, 10, 0.1, 's'),
    createRangeProperty('animation-iteration-count', 'Iteration Count', 1, 10, 1, '', 1),
    createSelectProperty('animation-direction', 'Direction', [
      'normal',
      'reverse',
      'alternate',
      'alternate-reverse'
    ]),
    createSelectProperty('animation-fill-mode', 'Fill Mode', [
      'none',
      'forwards',
      'backwards',
      'both'
    ]),
    createSelectProperty('animation-play-state', 'Play State', [
      'running',
      'paused'
    ]),
  ],

  Other: [
    createSelectProperty('cursor', 'Cursor', [
      'auto',
      'default',
      'pointer',
      'wait',
      'text',
      'move',
      'not-allowed',
      'grab'
    ]),
    createSelectProperty('resize', 'Resize', [
      'none',
      'both',
      'horizontal',
      'vertical'
    ]),
    createRangeProperty('opacity', 'Opacity', 0, 1, 0.01, '', 1),
    createSelectProperty('user-select', 'User Select', [
      'none',
      'auto',
      'text',
      'all'
    ]),
    createSelectProperty('pointer-events', 'Pointer Events', [
      'auto',
      'none'
    ]),
  ],
};