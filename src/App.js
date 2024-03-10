//import './App.css';
import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route exact path='/contato' element={ <Contact/> } />
        <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
