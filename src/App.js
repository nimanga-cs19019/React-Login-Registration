import logo from './logo.svg';
import './App.css';
import LoginSignup from './Components/LginSignup/LoginSingup';
import Signup from './Signup';
import Layout from './pages/Layout';
import { Routes,Route } from 'react-router-dom';







function App() {





  
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route path="/" element={<LoginSignup />} />
      <Route path="Signup" element={<Signup/>} />
      </Route>
    </Routes>
  );
}

export default App;
