import { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useJourneys } from '../hooks/queries';

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

const Naviation: FC = () => {
  const { isLoading, error, data } = useJourneys('');

  if (isLoading) return null;
  if (error) {
    console.error(error);
    return null;
  }

  return (
    <Nav>
      <Ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {data?.journeys.find((x) => ['sign-in', 'mfa'].includes(x)) && (
          <li>
            <Link to="/sign-in">sign-in</Link>
          </li>
        )}
        {data?.journeys.includes('sign-out') && (
          <li>
            <Link to="/sign-out">sign-in</Link>
          </li>
        )}
        {data?.journeys.includes('reset-password') && (
          <li>
            <Link to="/reset-password">reset passsword</Link>
          </li>
        )}
      </Ul>
    </Nav>
  );
};

export default Naviation;
