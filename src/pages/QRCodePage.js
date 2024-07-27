import React from 'react';
import { useLocation } from 'react-router-dom';

const QRCodePage = () => {
  const location = useLocation();
  const { qrCodeDataUrl } = location.state || {};

  return (
    <div>
      {qrCodeDataUrl ? (
        <img src={qrCodeDataUrl} alt="QR Code" />
      ) : (
        <p>No QR code available</p>
      )}
    </div>
  );
};

export default QRCodePage;
