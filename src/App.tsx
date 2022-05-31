import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

import "./App.css";
import Clock from "./components/Clock";

import { Routes, Route, Link } from "react-router-dom";
import User from "./pages/User";
import Count from "./components/Count";
import { ReactTab } from "./pages/ReactTab";
import { ReactCopyToClipboard } from "./pages/ReactCopyToClipboard";
import { ReactCaledar } from "./pages/ReactCalendar";
import Tooltip from "./pages/Tooltip";
import ReactSelect from "./pages/ReactSelect";
import { Roullete } from "./pages/Roullete";
import { Provider as ProviderRedux } from "react-redux";
import { store } from "./store";
import { Redux } from "./pages/Redux";

function App() {
  return (
    <ProviderRedux store={store}>
      <ApolloProvider client={client}>
        <div className="App">
          <header className="App-header">
            <Clock />

            <nav className="nav">
              <Link to="/">home</Link>
              <Link to="/user/5?brand=minha-marca-teste">
                usuário com parametro 5
              </Link>
              <Link to="/countdown">react-countdown</Link>
              <Link to="/react-tabs">react-tabs</Link>
              <Link to="/react-copy-to-clipboard">react-copy-to-clipboard</Link>
              <Link to="/react-calendar">react calendar</Link>
              <Link to="/react-tooltip">react tooltip</Link>
              <Link to="/react-select">react-select</Link>
              <Link to="/react-custom-roulette">react-custom-roulette</Link>
              <Link to="/redux">react-redux</Link>
            </nav>

            <h2>conteúdo react router Dom</h2>
            <Routes>
              <Route path="/user/:id" element={<User />} />
              <Route path="/countdown" element={<Count />} />
              <Route path="/react-tabs" element={<ReactTab />} />
              <Route
                path="/react-copy-to-clipboard"
                element={<ReactCopyToClipboard />}
              />
              <Route path="/react-calendar" element={<ReactCaledar />} />
              <Route path="/react-tooltip" element={<Tooltip />} />
              <Route path="/react-select" element={<ReactSelect />} />
              <Route path="/react-custom-roulette" element={<Roullete />} />
              <Route path="/redux" element={<Redux />} />
            </Routes>
          </header>
        </div>
      </ApolloProvider>
    </ProviderRedux>
  );
}

export default App;
