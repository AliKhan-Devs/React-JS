import React from 'react';
import { Download } from 'lucide-react';

export default function FinalResult({ steps, calculationType, onExportPDF }) {
  const finalStep = steps[steps.length - 1];

  return (
    <div className="bg-blue-50 p-6 rounded-lg shadow-lg border-2 border-blue-200">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-bold text-blue-900 mb-2">
            Final Result: {calculationType}
          </h3>
          <div className="text-xl font-bold text-blue-700">
            {/* {(finalStep.result)?(finalStep.result.toFixed(4)):""} {finalStep.unit} */}
            <br />
            {finalStep.description}
          </div>
        </div>
        <button
          onClick={onExportPDF}
          className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          <Download className="h-5 w-5" />
          <span>Export PDF</span>
        </button>
      </div>
    </div>
  );
}