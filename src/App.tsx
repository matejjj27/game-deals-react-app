import './App.css';
import { BrowserRouter } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import { UserProvider } from "./hooks/use-user"
import InitProviders, { ProviderType } from './components/common/InitProviders';
import GameProvider from './hooks/use-games';
import Counter from './components/Counter';
import AppRoutes from './components/common/AppRoutes';

const App: React.FC = () => {

  const providers = [
    UserProvider,
    GameProvider,
  ] as ProviderType[];

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Counter />
        <InitProviders providers={providers}>
          <AppRoutes />
        </InitProviders>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;