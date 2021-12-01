import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';
import ReactJson from 'react-json-view';
import Navigation from './components/Nav';
import Routes from './components/Routes';
import { SdkProvider } from './hooks/Sdk';
import { fetcher } from './utils/fetcher';
import { useState } from 'react';
import { Draggable } from './components/Draggable';
import Box from './components/Box';

const PageWrapper = styled.div<IPage>`
  flex-grow: 1;
  width: 95%;
  min-height: 0;

  display: grid;
  // grid-template-columns: ${({ dragWidth }) => `${dragWidth}%`} auto;
  grid-template-rows: auto ${({ dragHeight }) => `${dragHeight}%`};
  grid-template-areas:
    'content'
    'payloads';
`;

interface IPage {
  dragWidth: number;
  dragHeight: number;
}

function App() {
  const [height, setHeight] = useState(30);
  const [fetchResponse, setFetchResponse] = useState<any>({});

  return (
    <div className="App">
      <Router>
        <SdkProvider params={{ fetcher: fetcher({ onResponse: setFetchResponse }) }}>
          <PageWrapper dragHeight={height} dragWidth={0}>
            <Box style={{ gridArea: 'content', justifyContent: 'flex-start' }}>
              <Navigation />
              <Routes />
            </Box>
            <div
              style={{
                gridArea: 'payloads',
                borderTop: 'thin solid grey',
                background: 'white',
                textAlign: 'left',
              }}
            >
              <Draggable
                onDragging={({ y }) => {
                  setHeight(y);
                }}
                direction="y"
              />
              <ReactJson src={fetchResponse} />
            </div>
          </PageWrapper>
        </SdkProvider>
      </Router>
    </div>
  );
}

export default App;
