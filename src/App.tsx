import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';
import Navigation from './components/Nav';
import Routes from './components/Routes';
import { SdkProvider } from './hooks/Sdk';
import { fetcher } from './utils/fetcher';

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
          <SdkProvider params={{ fetcher }} >
            <Navigation />
            <Routes />
          </SdkProvider>
        </Router>
      </Page>
    </div>
  );
}

export default App;
