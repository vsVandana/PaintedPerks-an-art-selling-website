
import './App.css';
import Body from './components/Body';
import Home from './Pages/MainPages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Shop from './Pages/MainPages/Shop';
import Artists from './Pages/MainPages/Artists';
import Footer from './components/Footer';
import Header from './components/Header';
import ContactUs from './Pages/MainPages/ContactUs';

function App() {

  return (
    
    <div className="conatainer mx-auto">
      <Router>
        <Header />
        <Body />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/shop' element={<Shop />}/>
          <Route path='/artists' element={<Artists />}/>
          <Route path='/contact' element={<ContactUs />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
   
  );
}

export default App;
