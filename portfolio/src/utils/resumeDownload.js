/**
 * Bulletproof helper to download Archana Kumari's Resume or CV PDF in any browser.
 * Fetches the binary as a blob and creates an object URL to guarantee the browser's
 * native save/download dialog triggers, with a resilient fallback to window.open.
 */
export const downloadPdfFile = async (pdfUrl, filename) => {
  try {
    const response = await fetch(pdfUrl);
    if (!response.ok) throw new Error(`HTTP error ${response.status}`);
    const blob = await response.blob();
    const objectUrl = window.URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = objectUrl;
    link.setAttribute('download', filename);
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    
    setTimeout(() => {
      document.body.removeChild(link);
      window.URL.revokeObjectURL(objectUrl);
    }, 200);
    return true;
  } catch (err) {
    console.warn('Blob download fallback triggered:', err);
    const fallbackLink = document.createElement('a');
    fallbackLink.href = pdfUrl;
    fallbackLink.download = filename;
    fallbackLink.target = '_blank';
    fallbackLink.rel = 'noopener noreferrer';
    fallbackLink.style.display = 'none';
    document.body.appendChild(fallbackLink);
    fallbackLink.click();
    setTimeout(() => {
      document.body.removeChild(fallbackLink);
    }, 200);
    return false;
  }
};

export const downloadResume = async (filename = 'Archana_Kumari_Resume.pdf') => {
  return downloadPdfFile('/Archana_Kumari_Resume.pdf', filename);
};

export const downloadCv = async (filename = 'Archana_Kumari_CV.pdf') => {
  return downloadPdfFile('/Archana_Kumari_CV.pdf', filename);
};
