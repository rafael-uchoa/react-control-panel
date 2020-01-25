import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default () => (
  <NavBar>
    <StyledLink to="/admin">
      <p>Admin</p>
    </StyledLink>
    <StyledLink to="/client">
      <p>Client</p>
    </StyledLink>
  </NavBar>
);

const NavBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f2f2fa;
  border-bottom: 3px solid #e8ebf0;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  background: #ff6e75;
  color: white;
  margin: 0.5rem 1rem;
  padding: 0.5rem 0.75rem;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 5px;
`;
