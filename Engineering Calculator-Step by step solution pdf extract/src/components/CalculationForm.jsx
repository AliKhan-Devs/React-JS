import React, { useState } from 'react'

export default function CalculationForm({ calculation, onCalculate }) {
    const [values, setValues] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        onCalculate(values);
    };

    const handleInputChange = (id, value) => {
        setValues(prev => ({
            ...prev,
            [id]: parseFloat(value) || 0
        }));
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="space-y-4">

                {calculation.inputs.map((input) => (
                    <div key={input.id}>
                        <label className="block text-sm font-medium text-gray-700">
                            {input.label} {input.unit && <span className="text-gray-500">({input.unit})</span>}
                        </label>
                        <input
                            type="number"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 h-8 px-2"
                            value={values[input.id] || ''}
                            onChange={(e) => handleInputChange(input.id, e.target.value)}
                            required
                        />
                    </div>

                ))}

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                >
                    Calculate
                </button>
            </form>
        </>
    )
}
