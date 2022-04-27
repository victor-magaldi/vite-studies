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
import ReactTooltip from "react-tooltip";
import { Routes, Route, Link } from "react-router-dom";
import Teste from "./pages/Teste";
import User from "./pages/User";
import Count from "./components/Count";
import { ReactTab } from "./pages/ReactTab";
import { ReactCopyToClipboard } from "./pages/ReactCopyToClipboard";
import { ReactCaledar } from "./pages/ReactCalendar";

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
          <p data-tip="hello world">react-tooltip</p>
          <ReactTooltip backgroundColor="#f2f2f2" textColor="#000" />
          <Link to="/teste">teste</Link>
          <Link to="/">home</Link>
          <Link to="/user/5?brand=minha-marca-teste">
            usuário com parametro 7
          </Link>
          <Link to="/countdown">react-countdown</Link>
          <Link to="/react-tabs">react-tabs</Link>
          <Link to="/react-copy-to-clipboard">react-copy-to-clipboard</Link>
          <Link to="/react-calendar">react calendar</Link>

          <h2>conteúdo react router Dom</h2>
          <Routes>
            <Route path="/teste" element={<Teste />} />
            <Route path="/user/:id" element={<User />} />
            <Route path="/countdown" element={<Count />} />
            <Route path="/react-tabs" element={<ReactTab />} />
            <Route
              path="/react-copy-to-clipboard"
              element={<ReactCopyToClipboard />}
            />
            <Route path="/react-calendar" element={<ReactCaledar />} />
          </Routes>
        </header>
      </div>
    </ApolloProvider>
  );
}

export default App;
