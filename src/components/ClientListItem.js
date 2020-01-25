import React, { useState } from 'react';
import styled from 'styled-components';

// Component
export default props => {
  const [quantity, setQuantity] = useState(0);

  function handleIncrement() {
    setQuantity(quantity + 1);
  }

  function handleReduction() {
    if (quantity === 0) return;
    setQuantity(quantity - 1);
  }

  return (
    <ClientListItem>
      <TextContainer>
        <p>{props.name}</p>
        <span>${props.price}</span>
      </TextContainer>
      <CounterContainer>
        <button
          onClick={() => {
            props.handlePrice(quantity <= 0 ? 0 : -props.price);
            handleReduction();
          }}
        >
          <i className="fas fa-minus"></i>
        </button>
        <h1>{quantity}</h1>
        <button
          onClick={() => {
            props.handlePrice(props.price);
            handleIncrement();
          }}
        >
          <i className="fas fa-plus"></i>
        </button>
      </CounterContainer>
    </ClientListItem>
  );
};

// Styles
const ClientListItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem;
  border-bottom: 1px solid #eef1f6;
  background: white;
  color: #8c9195;
  text-align: left;
`;

const TextContainer = styled.div`
  p {
    color: black;
  }

  span {
    color: #3bce82;
  }
`;

const CounterContainer = styled.div`
  display: flex;

  h1 {
    margin: 0 1rem;
  }

  button {
    outline: none;
    border: none;
    border-radius: 50%;
    background: #ff6e75;
    color: white;
    padding: 1rem;
    cursor: pointer;
  }
`;
