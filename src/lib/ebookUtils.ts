// Utility for generating PDF from HTML
export const generatePDF = (elementId?: string) => {
  if (typeof window === 'undefined') return;
  
  // Use browser's print functionality which can save as PDF
  window.print();
};

// Alternative: Download HTML file
export const downloadHTML = (filename: string = 'ebook.html') => {
  if (typeof window === 'undefined') return;
  
  const link = document.createElement('a');
  link.href = '/ebook.html';
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

// Copy e-book content to clipboard as text
export const copyEbookText = async () => {
  if (typeof window === 'undefined') return;
  
  try {
    const response = await fetch('/ebook-instagram-automat-na-penize.md');
    const text = await response.text();
    await navigator.clipboard.writeText(text);
    alert('E-book obsah byl zkopírován do schránky!');
  } catch (error) {
    console.error('Error copying to clipboard:', error);
    alert('Nepodařilo se zkopírovat obsah. Zkuste to prosím znovu.');
  }
};
