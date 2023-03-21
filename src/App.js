import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './App.css';
import Home from './components/home';
import Header from './components/header';
import Exchanges from './components/Exchanges';
import Coin from './components/Coin';
import CoinDetails from './components/CoinDetails';
import Footer from './components/Footer';
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={< Home />} />
        <Route exact path='/coins' element={< Coin />} />
        <Route exact path='/coin/:id' element={< CoinDetails />} />
        <Route exact path='/exchanges' element={< Exchanges />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
