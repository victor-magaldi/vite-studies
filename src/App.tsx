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
import { ReactCopyToClipboard } from "./pages/ReactCopyToClipboard";
import { ReactCaledar } from "./pages/ReactCalendar";
import Tooltip from "./pages/Tooltip";
import ReactSelect from "./pages/ReactSelect";
import { Roullete } from "./pages/Roullete";
import { Provider as ProviderRedux } from "react-redux";
import { store } from "./store";
import { Redux } from "./pages/Redux";
import { DatePickerPage } from "./pages/ReactDatePickerPage";
import { ReactTimerPickerPage } from "./pages/ReactTimerPickerPage";
import { ReactDragAndDrop } from "./pages/ReactDragAndDrop";
import { ReactQRCode } from "./pages/ReactQRCode";
import { ReactIntlPage } from "./pages/ReactIntlPage";
import { Swr } from "./pages/Swr";
import { DragAndDrop } from "./pages/DragAndDrop";

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
              <Link to="/react-copy-to-clipboard">react-copy-to-clipboard</Link>
              <Link to="/react-calendar">react calendar</Link>
              <Link to="/react-tooltip">react tooltip</Link>
              <Link to="/react-select">react-select</Link>
              <Link to="/react-custom-roulette">react-custom-roulette</Link>
              <Link to="/redux">react-redux</Link>
              <Link to="/date-picker">date-picker</Link>
              <Link to="/timer-picker">timer-picker</Link>
              <Link to="DragAndDrop">DragAndDrop</Link>
              <Link to="/drag-drop">React Drag and drop</Link>
              <Link to="/react-qr-code">react-qr-code</Link>
              <Link to="/react-intl">react-intl</Link>
              <Link to="/swr">swr</Link>
            </nav>
            <Routes>
              <Route path="/user/:id" element={<User />} />
              <Route path="/countdown" element={<Count />} />
              <Route
                path="/react-copy-to-clipboard"
                element={<ReactCopyToClipboard />}
              />
              <Route path="/react-calendar" element={<ReactCaledar />} />
              <Route path="/react-tooltip" element={<Tooltip />} />
              <Route path="/react-select" element={<ReactSelect />} />
              <Route path="/react-custom-roulette" element={<Roullete />} />
              <Route path="/redux" element={<Redux />} />
              <Route path="/date-picker" element={<DatePickerPage />} />
              <Route path="/timer-picker" element={<ReactTimerPickerPage />} />
              <Route path="/react-drag-drop" element={<ReactDragAndDrop />} />
              <Route path="/drag-drop" element={<DragAndDrop />} />
              <Route path="/react-qr-code" element={<ReactQRCode />} />
              <Route path="/react-intl" element={<ReactIntlPage />} />
              <Route path="/swr" element={<Swr />} />
            </Routes>
          </header>
        </div>
      </ApolloProvider>
    </ProviderRedux>
  );
}

export default App;
