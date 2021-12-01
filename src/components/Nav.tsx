import { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  width: 50%;
  margin: 20px;
  padding-bottom: 20px;
  border-bottom: thin solid #88c0d0;
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
`;

const Naviation: FC = () => (
  <Nav>
    <Ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/sign-in">sign-in</Link>
      </li>
      <li>
        <Link to="/sign-out">sign-out</Link>
      </li>
      <li>
        <Link to="/sign-up">sign-up</Link>
      </li>
    </Ul>
  </Nav>
);

export default Naviation;
