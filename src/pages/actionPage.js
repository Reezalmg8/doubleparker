import React from 'react';
import styled from 'styled-components';
import { useSearchParams } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 10px;

  &:hover {
    background-color: #0056b3;
  }
`;

const ActionPage = () => {
  const [searchParams] = useSearchParams();
  const userId = searchParams.get('userId');

  const handleSendSMS = () => {
    window.location.href = `http://localhost:5000/send-sms?userId=${userId}`;
  };

  const handleSendWhatsApp = () => {
    window.location.href = `http://localhost:5000/send-whatsapp?userId=${userId}`;
  };

  const handleSendVoiceNote = () => {
    window.location.href = `http://localhost:5000/send-voice-note?userId=${userId}`;
  };

  return (
    <Container>
      <h1>Choose an Action</h1>
      <Button onClick={handleSendSMS}>Send SMS</Button>
      <Button onClick={handleSendWhatsApp}>Send WhatsApp</Button>
      <Button onClick={handleSendVoiceNote}>Send Voice Note</Button>
    </Container>
  );
};

export default ActionPage;
