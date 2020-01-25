import React, { useState } from 'react';
import styled from 'styled-components';

import ClientListItem from '../components/ClientListItem.js';

// Component
export default props => {
  const [price, setPrice] = useState(0);

  function handlePrice(itemPrice) {
    console.log(itemPrice);
    setPrice(price + parseInt(itemPrice));
  }

  return (
    <Client>
      <h1>Client Panel</h1>
      <ProductsContainer>
        {props.product.map((product, id) => (
          <ClientListItem
            key={id}
            handlePrice={handlePrice}
            name={product.name}
            price={product.price}
          />
        ))}
      </ProductsContainer>
      <OrderButton onClick={() => alert(`Total: $${price}`)}>
        <span>Order Now</span>
        <span>${price}</span>
      </OrderButton>
    </Client>
  );
};

// Styles
const Client = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: center;
  background-color: #eef1f6;
  color: #282c34;
  height: 100vh;
  padding-top: 1rem;
`;

const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: center;
  width: 500px;
  margin-top: 1rem;
`;

const OrderButton = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  width: 500px;
  outline: none;
  background-color: #ff6e75;
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  border: none;
  transition: all 0.2s;
  cursor: pointer;
`;
