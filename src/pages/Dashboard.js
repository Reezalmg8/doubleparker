import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

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

const DashboardPage = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <Container>
      <h1>Dashboard</h1>
      <Button onClick={() => handleNavigate('/register')}>Register</Button>
      <Button onClick={() => handleNavigate('/generate-qr')}>Generate QR Code</Button>
    </Container>
  );
};

export default DashboardPage;
