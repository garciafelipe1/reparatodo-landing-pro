import React, { useEffect, useState } from 'react';
import { removeBackground, loadImage } from '../utils/backgroundRemoval';

const LogoProcessor = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  
  useEffect(() => {
    const processLogo = async () => {
      if (isProcessing) return;
      
      setIsProcessing(true);
      try {
        console.log('Starting logo background removal...');
        
        // Load the current logo image
        const response = await fetch('/lovable-uploads/21cc9dd6-ee06-4e9c-9f55-5ae1d61af1ea.png');
        const blob = await response.blob();
        
        // Convert to HTMLImageElement
        const imageElement = await loadImage(blob);
        
        // Remove background
        const processedBlob = await removeBackground(imageElement);
        
        // Create download link for processed image
        const url = URL.createObjectURL(processedBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'logo-sin-fondo.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
        
        console.log('Logo background removed and downloaded!');
        
      } catch (error) {
        console.error('Error processing logo:', error);
      } finally {
        setIsProcessing(false);
      }
    };
    
    processLogo();
  }, [isProcessing]);
  
  return (
    <div className="fixed top-4 right-4 z-50 bg-black text-white p-4 rounded">
      {isProcessing ? 'Procesando logo...' : 'Logo procesado'}
    </div>
  );
};

export default LogoProcessor;