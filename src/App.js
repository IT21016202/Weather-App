import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import ViewWeather from './pages/ViewWeather';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard/>} /> 
        <Route path="details/:cityID" element={<ViewWeather/>} />
      </Routes>
    </BrowserRouter>  
  );
}

export default App;
