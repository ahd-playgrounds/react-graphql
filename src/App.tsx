import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import styled from 'styled-components';
import ReactJson from 'react-json-view';
import Navigation from './components/Nav';
import Routes from './components/Routes';
import { FC, useState } from 'react';
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

const queryClient = new QueryClient();

function App() {
  const [height, setHeight] = useState(30);

  return (
    <div className="App">
      <Router>
        <QueryClientProvider client={queryClient}>
          <PageWrapper dragHeight={height} dragWidth={0}>
            <Box style={{ gridArea: 'content', justifyContent: 'flex-start' }}>
              <Navigation />
              <Routes />
            </Box>
            <Payloads setHeight={setHeight} />
          </PageWrapper>
        </QueryClientProvider>
      </Router>
    </div>
  );
}

interface IPayloads {
  setHeight: (n: number) => void;
}

const Payloads: FC<IPayloads> = ({ setHeight }) => {
  return (
    <div
      style={{
        gridArea: 'payloads',
        borderTop: 'thin solid grey',
        textAlign: 'left',
      }}
    >
      <Draggable
        onDragging={({ y }) => {
          setHeight(y);
        }}
        direction="y"
      />
      <p>Response:</p>
      <ReactJson src={{}} theme="twilight" style={{ marginTop: '5px' }} />
    </div>
  );
};

export default App;
