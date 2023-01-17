import './App.css';
import { BrowserRouter } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import InitProviders, { Providers } from './components/common/InitProviders';
import Counter from './components/Counter';
import AppRoutes from './components/common/AppRoutes';
import SelectedGames from './components/SelectedGames';

const App: React.FC = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        {/* <Counter /> */}
        <br></br>
        <br></br>
        <InitProviders providers={Providers}>
          <AppRoutes />
        </InitProviders>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;