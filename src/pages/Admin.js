import React from 'react';
import styled from 'styled-components';

import AdminListItem from '../components/AdminListItem.js';
import AdminForm from '../components/AdminForm.js';

// Component
export default props => {
  return (
    <Admin>
      <h1>Admin Panel</h1>
      <AdminForm
        handleSubmit={props.handleSubmit}
        handleInputNewProductName={props.handleInputNewProductName}
        handleInputNewProductPrice={props.handleInputNewProductPrice}
      />
      <ProductList>
        {props.product.map((product, i) => (
          <AdminListItem
            key={i}
            name={product.name}
            price={product.price}
            handleDelete={props.handleDelete}
            itemid={product.id}
          />
        ))}
      </ProductList>
    </Admin>
  );
};

// Styles
const Admin = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: center;
  background-color: #eef1f6;
  color: #282c34;
  height: 100vh;
  padding-top: 1rem;
`;

const ProductList = styled.div`
  overflow: auto;
  display: flex;
  flex-direction: column;
`;
