import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

// Styled Components
const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  margin: 10px 0;
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

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    plateNumber: '',
    carDetails: ''
  });

  const navigate = useNavigate(); // Hook for navigation

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // After successful registration
    navigate('/login', { state: formData });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
      <Input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" required />
      <Input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Address" required />
      <Input type="text" name="plateNumber" value={formData.plateNumber} onChange={handleChange} placeholder="Plate Number" required />
      <Input type="text" name="carDetails" value={formData.carDetails} onChange={handleChange} placeholder="Car Details" required />
      <Button type="submit">Register</Button>
    </Form>
  );
};

export default RegistrationForm;
