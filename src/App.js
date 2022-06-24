import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from "./Componenets/Home";
import Product from './Componenets/Product'
import About from './Componenets/About'
import Contact from './Componenets/Contact'


function App() {
  return (
    <div>
      <Router>     
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product' element={<Product />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
