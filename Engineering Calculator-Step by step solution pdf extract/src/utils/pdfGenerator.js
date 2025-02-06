import jsPDF from 'jspdf';

export function generatePDF(calculationType, steps) {
  const pdf = new jsPDF();
  let yPosition = 20;

  // Add title
  pdf.setFontSize(20);
  pdf.text(calculationType + ' Calculation Report', 20, yPosition);
  
  // Add date
  pdf.setFontSize(12);
  yPosition += 10;
  pdf.text(`Generated on: ${new Date().toLocaleString()}`, 20, yPosition);
  
  // Add steps
  yPosition += 20;
  pdf.setFontSize(14);
  steps.forEach((step, index) => {
    // Check if we need a new page
    if (yPosition > 250) {
      pdf.addPage();
      yPosition = 20;
    }

    pdf.setFont(undefined, 'bold');
    pdf.text(`Step ${index + 1}: ${step.description}`, 20, yPosition);
    yPosition += 10;

    if (step.formula) {
      pdf.setFont(undefined, 'normal');
      pdf.text(`Formula: ${step.formula}`, 30, yPosition);
      yPosition += 10;
    }

    if(step.result){
      pdf.setFont(undefined, 'normal');
      pdf.text(
        `Result: ${step.result.toFixed(4)}${step.unit ? ' ' + step.unit : ''}`,
        30,
        yPosition
      );
    }
  
    yPosition += 20;
  });

  // Add final result
  const finalStep = steps[steps.length - 1];
  yPosition += 10;
  pdf.setFont(undefined, 'bold');
  pdf.text('Final Result:', 20, yPosition);
  yPosition += 10;

  pdf.text(
    `${finalStep.description}`,
    20,
    yPosition
  );

  // Save the PDF
  pdf.save(`${calculationType.toLowerCase().replace(/\s+/g, '-')}-calculation.pdf`);
}