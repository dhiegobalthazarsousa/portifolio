//import './App.css';
import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Construction from './pages/Construction';


function App() {
  return (
    <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route exact path='/contato' element={ <Construction /> } />
        <Route path='*' element={<Construction />} />
    </Routes>
  );
}

export default App;
