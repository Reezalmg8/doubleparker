// src/components/Plans.js
import React from 'react';
import styled from 'styled-components';

const PlanCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  margin: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const PlanButton = styled.button`
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

const Plans = () => {
  const plans = [
    { name: 'Basic Plan', price: '$5/month', features: ['Up to 10 notifications', 'SMS notifications', 'QR code'] },
    { name: 'Standard Plan', price: '$10/month', features: ['Up to 30 notifications', 'SMS & WhatsApp notifications', 'QR code', 'Priority Support'] },
    { name: 'Premium Plan', price: '$20/month', features: ['Unlimited notifications', 'SMS, WhatsApp & Voice notifications', 'QR code', 'Priority Support', 'Analytics'] },
  ];

  return (
    <div>
      {plans.map((plan, index) => (
        <PlanCard key={index}>
          <h2>{plan.name}</h2>
          <p>{plan.price}</p>
          <ul>
            {plan.features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
          <PlanButton>Subscribe</PlanButton>
        </PlanCard>
      ))}
    </div>
  );
};

export default Plans;
