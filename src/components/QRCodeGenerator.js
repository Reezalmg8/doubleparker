import React, { useState } from 'react';
import QRCode from 'react-qr-code';
import styled from 'styled-components';

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;

const Input = styled.input`
  margin: 10px;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const Button = styled.button`
  padding: 10px;
  font-size: 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const QRCodeGenerator = () => {
  const [text, setText] = useState('');
  const [showQRCode, setShowQRCode] = useState(false);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleGenerate = () => {
    setShowQRCode(true);
  };

  return (
    <Container>
      <Input 
        type="text" 
        value={text} 
        onChange={handleChange} 
        placeholder="Enter text for QR code" 
      />
      <Button onClick={handleGenerate}>Generate QR Code</Button>
      {showQRCode && (
        <div style={{ marginTop: '20px' }}>
          <QRCode value={text} />
        </div>
      )}
    </Container>
  );
};

export default QRCodeGenerator;
