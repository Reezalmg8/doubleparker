import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

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

const ContactPage = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const phone = params.get('phone');

  return (
    <div>
      <h1>Contact Double Parker</h1>
      <Button onClick={() => window.open(`sms:${phone}`)}>Send SMS</Button>
      <Button onClick={() => window.open(`https://wa.me/${phone}`)}>Send WhatsApp</Button>
      <Button onClick={() => window.open(`tel:${phone}`)}>Voice Call</Button>
    </div>
  );
};

export default ContactPage;
