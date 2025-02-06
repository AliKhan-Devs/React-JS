import React, { useState } from 'react';
import { Calculator } from 'lucide-react';
import { calculations } from './calculations';
import CalculationForm from './components/CalculationForm';
import ResultSteps from './components/ResultSteps';
import FinalResult from './components/FinalResult';
import { generatePDF } from './utils/pdfGenerator';

function App() {

  const [selectedCalc, setSelectedCalc] = useState(calculations[0]);
  const [steps, setSteps] = useState([]);

  const handleCalculate = (values) => {
    const results = selectedCalc.calculate(values);
    setSteps(results);
  };

  const handleExportPDF = () => {
    generatePDF(selectedCalc.name, steps);
  };

  return (
    
    <div className="min-h-screen bg-gray-100">

      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3">
            <Calculator className="h-8 w-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">
              Engineering Calculator
            </h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">

        <div className="px-4 py-6 sm:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Select Calculation Type
                </label>

                <select
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 h-8"
                  value={selectedCalc.id}
                  onChange={(e) => setSelectedCalc(calculations.find(c => c.id === e.target.value))}
                >
                  {calculations.map((calc) => (
                    <option key={calc.id} value={calc.id}>
                      {calc.name}
                    </option>
                  ))}
                </select>
              </div>
              
              <CalculationForm
                calculation={selectedCalc}
                onCalculate={handleCalculate}
              />
            </div>

            <div className="space-y-6">
              {steps.length > 0 && (
                <FinalResult
                  steps={steps}
                  calculationType={selectedCalc.name}
                  onExportPDF={handleExportPDF}
                />
              )}
              
              <h2 className="text-xl font-semibold text-gray-900">
                Calculation Steps
              </h2>
              {steps.length > 0 ? (
                <ResultSteps steps={steps} />
              ) : (
                <div className="text-gray-500 text-center py-8">
                  Enter values and click calculate to see the steps
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;