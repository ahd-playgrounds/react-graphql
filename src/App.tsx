import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import Navigation from './components/Nav';
import Routes from './components/Routes';

const Page = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  flex-grow: 1;
  width: 95%;
`;

function App() {
  return (
    <div className="App">
      <Page>
        <Router>
          <Navigation />
          <Routes />
        </Router>
      </Page>
    </div>
  );
}

export default App;
