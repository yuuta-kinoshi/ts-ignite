import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header';
import Home from './components/pages/Home';
import Perfil from './components/pages/Perfil';

export const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/perfil' element={<Perfil />} />
      </Routes>
    </Router>
  );
};