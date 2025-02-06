// Beam Deflection Calculator
const beamDeflection = {
  id: 'beam-deflection',
  name: 'Beam Deflection',
  inputs: [
    { id: 'load', label: 'Applied Load (P)', unit: 'N' },
    { id: 'length', label: 'Beam Length (L)', unit: 'm' },
    { id: 'elasticity', label: 'Elastic Modulus (E)', unit: 'GPa' },
    { id: 'inertia', label: 'Moment of Inertia (I)', unit: 'm⁴' },
  ],
  calculate: (values) => {
    const { load, length, elasticity, inertia } = values;
    const deflection = (load * Math.pow(length, 3)) / (48 * elasticity * 1e9 * inertia);

    return [
      {
        description: 'Convert elastic modulus to Pascal',
        formula: 'E(Pa) = E(GPa) × 10⁹',
        result: elasticity * 1e9,
        unit: 'Pa'
      },
      {
        description: 'Calculate maximum deflection',
        formula: 'δ = (P × L³) / (48 × E × I)',
        result: deflection,
        unit: 'm'
      },
      {
        description:`The deflection is: ${deflection.toFixed(4)} meter`
      }
    ];
  }
};

// Gear Ratio Calculator
const gearRatio = {
  id: 'output-speed',
  name: 'Output Speed',
  inputs: [
    { id: 'teeth1', label: 'Driver Gear Teeth' },
    { id: 'teeth2', label: 'Driven Gear Teeth' },
    { id: 'rpm1', label: 'Input Speed', unit: 'RPM' },
  ],
  calculate: (values) => {
    const { teeth1, teeth2, rpm1 } = values;
    const ratio = teeth2 / teeth1;
    const rpm2 = rpm1 / ratio;

    return [
      {
        description: 'Calculate gear ratio',
        formula: 'GR = N₂/N₁',
        result: ratio,
      },
      {
        description: 'Calculate output speed',
        formula: 'n₂ = n₁/GR',
        result: rpm2,
        unit: 'RPM'
      },
      {
        description:`The output speed is: ${rpm2.toFixed(4)} RPM`
      }
    ];
  }
};

// Stress Analysis Calculator
const stressAnalysis = {
  id: 'stress-analysis',
  name: 'Stress Analysis',
  inputs: [
    { id: 'force', label: 'Applied Force (F)', unit: 'N' },
    { id: 'area', label: 'Cross-sectional Area (A)', unit: 'm²' },
  ],
  calculate: (values) => {
    const { force, area } = values;
    const stress = force / area;
    const strainFactor = 0.3; // Example Poisson's ratio
    const shearStress = stress * strainFactor;

    return [
      {
        description: 'Calculate normal stress',
        formula: 'σ = F/A',
        result: stress,
        unit: 'Pa'
      },
      {
        description: 'Calculate shear stress',
        formula: 'τ = σ × ν',
        result: shearStress,
        unit: 'Pa'
      },
      {
        description:`The shearStress is: ${shearStress.toFixed(4)} Pa`
      }
    ];
  }
};

// Thermal Expansion Calculator
const thermalExpansion = {
  id: 'thermal-expansion',
  name: 'Thermal Expansion',
  inputs: [
    { id: 'length', label: 'Initial Length (L₀)', unit: 'm' },
    { id: 'coefficient', label: 'Thermal Expansion Coefficient (α)', unit: '1/°C' },
    { id: 'tempChange', label: 'Temperature Change (ΔT)', unit: '°C' },
  ],
  calculate: (values) => {
    const { length, coefficient, tempChange } = values;
    const expansion = length * coefficient * tempChange;
    const finalLength = length + expansion;

    return [
      {
        description: 'Calculate length change',
        formula: 'ΔL = L₀ × α × ΔT',
        result: expansion,
        unit: 'm'
      },
      {
        description: 'Calculate final length',
        formula: 'L = L₀ + ΔL',
        result: finalLength,
        unit: 'm'
      },
      {
        description:`The final length is: ${finalLength.toFixed(4)} meter`
      }
    ];
  }
};

// Spring Force Calculator
const springForce = {
  id: 'spring-force',
  name: 'Spring Force',
  inputs: [
    { id: 'constant', label: 'Spring Constant (k)', unit: 'N/m' },
    { id: 'displacement', label: 'Displacement (x)', unit: 'm' },
  ],
  calculate: (values) => {
    const { constant, displacement } = values;
    const force = constant * displacement;
    const potentialEnergy = 0.5 * constant * Math.pow(displacement, 2);

    return [
      {
        description: "Calculate spring force",
        formula: 'F = kx',
        result: force,
        unit: 'N'
      },
      {
        description: 'Calculate potential energy',
        formula: 'U = ½kx²',
        result: potentialEnergy,
        unit: 'J'
      },{
        description:`The final energy is: ${potentialEnergy.toFixed(4)}J`,
  
      }
    ];
  }
};


// Combine stress analysis
const combinedStress = {
  id: 'combined-stress',
  name: 'Combined Stress Analysis',
  inputs: [
    { id: 'normalStressX', label: 'Normal Stress in X direction (σx)', unit: 'Pa' },
    { id: 'normalStressY', label: 'Normal Stress in Y direction (σy)', unit: 'Pa' },
    { id: 'shearStress', label: 'Shear Stress (τxy)', unit: 'Pa' },],

  calculate: (values) => {
    const { normalStressX, normalStressY, shearStress } = values;
    const avgStress = (normalStressX + normalStressY) / 2;
    const radius = Math.sqrt(Math.pow((normalStressX - normalStressY) / 2, 2) + Math.pow(shearStress, 2));
    const principalStress1 = avgStress + radius;
    const principalStress2 = avgStress - radius;

    return [
      {
        description: 'Calculate average stress',
        formula: 'σ_avg = (σx + σy) / 2',
        result: avgStress,
        unit: 'Pa'
      },
      {
        description: 'Calculate radius of Mohr\'s Circle',
        formula: 'R = √[((σx - σy)/2)² + τxy²]',
        result: radius,
        unit: 'Pa'
      },
      {
        description: 'Calculate principal stress 1',
        formula: 'σ₁ = σ_avg + R',
        result: principalStress1,
        unit: 'Pa'
      },
      {
        description: 'Calculate principal stress 2',
        formula: 'σ₂ = σ_avg - R',
        result: principalStress2,
        unit: 'Pa'
      },
      {
        description: `min force is ${principalStress1.toFixed(4)}Pa and max force is ${principalStress2.toFixed(4)}Pa`,
      },


    ];
  }
};


export const calculations = [
  beamDeflection,
  gearRatio,
  stressAnalysis,
  thermalExpansion,
  springForce,
  combinedStress
];