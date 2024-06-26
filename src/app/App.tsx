import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Navbar } from '../components/Navbar';
import { Market } from '../pages/Market';
import { Dogepaper } from '../pages/Dogepaper';
import { Payment } from '../pages/Payment';
import './style.scss';

const App = () => {

  return (
    <div className='container-app'>
      <Navbar />
      <Routes>        
        <Route path="/"  element={<Home/>} />
        <Route path="/market"  element={<Market/>} /> 
        <Route path="/dogepaper"  element={<Dogepaper/>} />
        <Route path="/payment"  element={<Payment/>} /> 
      </Routes>
    </div>
  )
};

export default App;
