import { AppContainer, AppLink, Header } from './styles';

function App() {
  return (
    <AppContainer>
      <Header>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <AppLink
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </AppLink>
      </Header>
    </AppContainer>
  );
}

export default App;
