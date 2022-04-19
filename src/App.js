import { Route, Routes } from 'react-router-dom';
import Header from '../src/Pages/Shared/Header/Header';
import './App.css';
import Home from './Pages/Home/Home';
import Service from './Pages/Service/Service';
import About from './Pages/About/About';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import Footer from './Pages/Shared/Footer/Footer';
import NotFound from './Pages/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>

        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path='/service' element={<Service></Service>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>

        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
