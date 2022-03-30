import { useState } from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

import "./App.css";
import { HelloWorld } from "./components/HelloWorld";
import Clock from "./components/Clock";

function App() {
  const [count, setCount] = useState(0);

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
          <HelloWorld title="Hello Word" />
          <p>Hello Vite + React!</p>
          <p>
            <button
              type="button"
              onClick={() => setCount((count) => count + 1)}
            >
              count is: {count}
            </button>
          </p>
          <Clock />
        </header>
      </div>
    </ApolloProvider>
  );
}

export default App;
