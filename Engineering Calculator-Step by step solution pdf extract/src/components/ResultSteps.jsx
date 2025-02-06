import React from 'react';

export default function ResultSteps({ steps }) {
  return (
    <div className="space-y-4">
      {steps.map((step, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-medium text-gray-900">Step {index + 1}: {step.description}</h3>
          {step.formula && (
            <div className="mt-2 text-sm text-gray-600 font-mono bg-gray-50 p-2 rounded">
              {step.formula}
            </div>
          )}
          <div className="mt-2 text-lg font-semibold text-blue-600">
           {step.result&& `Result: ${step.result.toFixed(4)} ${step.unit}`}
          </div>
        </div>
      ))}
    </div>
  );
}