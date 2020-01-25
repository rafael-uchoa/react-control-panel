import React from 'react';
import styled from 'styled-components';

// Component
export default props => (
  <AdminListItem>
    <div>
      <h3>{props.name}</h3>
      <p>Price: ${props.price}</p>
    </div>
    <button onClick={() => props.handleDelete(props.itemid)}>
      <i className="fas fa-trash" />
    </button>
  </AdminListItem>
);

// Styles
const AdminListItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 500px;
  padding: 1rem;
  border-bottom: 1px solid #eef1f6;
  background: white;
  color: #8c9195;
  text-align: left;

  h3 {
    font-size: 20px;
    font-weight: bold;
    color: black;
  }

  button {
    font-size: 15px;
    padding: 15px;
    outline: none;
    background-color: #ff6e75;
    color: white;
    border: none;
    border-radius: 50%;
    transition: all 0.2s;
    cursor: pointer;

    &:hover {
      opacity: 0.9;
    }
  }
`;
