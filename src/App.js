import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import AllCities from './components/AllCities';
import Heading from './components/Heading';
import OneCity from './components/OneCity';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Dashboard/>
      <Heading/>
        <Routes>
          <Route path="/" element={<AllCities/>} /> 
          <Route path="details/:cityID" element={<OneCity/>} />
        </Routes>
      <Footer/>
    </BrowserRouter>  
  );
}

export default App;
