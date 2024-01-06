
import './App.css';
import Body from './components/Body';
import Home from './Pages/MainPages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Shop from './Pages/MainPages/Shop';
import Artists from './Pages/MainPages/Artists';
import Contact_us from './Pages/MainPages/Contact_us';
import Footer from './components/Footer';
import Header from './components/Header';

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
          <Route path='/contact' element={<Contact_us />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
   
  );
}

export default App;
