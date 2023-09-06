import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';
import { PageError } from './Pages/404';
import Frm_Captura from './Pages/Frm_Capura';
import Login from './Pages/Login';


function App() {
  return (
    <>
      <Router>
          <Routes>
            <Route path="/" element={<Login></Login>} />
            <Route path="/Frm_Captura" element={<Frm_Captura></Frm_Captura>} />
            <Route path="*" element={<PageError></PageError>} />
          </Routes>
      </Router>
    
    </>
  );
}

export default App;
