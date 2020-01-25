import React from 'react';
import styled from 'styled-components';

// Component
export default props => (
  <AdminForm onSubmit={props.handleSubmit}>
    <h3>Product Name</h3>
    <input type="text" name="name" onInput={props.handleInputNewProductName} />
    <h3>Product Price</h3>
    <input
      type="text"
      name="price"
      onInput={props.handleInputNewProductPrice}
    />
    <input type="submit" value="Insert New Product" />
  </AdminForm>
);

// Styles
const AdminForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #30323e;
  color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  width: 500px;
  padding-top: 2rem;
  margin: 2rem;

  input {
    outline: none;
    background-color: white;
    color: #30323e;
    border: none;
    border-radius: 25px;
    padding: 0.5rem 1rem;
    margin-bottom: 2rem;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      opacity: 0.9;
    }
  }
`;
