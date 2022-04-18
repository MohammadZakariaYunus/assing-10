import Header from '../src/Pages/Shared/Header/Header';
import './App.css';
import Home from './Pages/Home/Home';
import Pricing from './Pages/Pricing/Pricing';
import Footer from './Pages/Shared/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
      <Pricing></Pricing>
      <Footer></Footer>

    </div>
  );
}

export default App;
