
import './App.css';
import Body from './components/Body';
import Home from './Pages/MainPages/Home';
import { BrowserRouter as Router, Routes, Route, useLocation  } from 'react-router-dom';
import Shop from './Pages/MainPages/Shop';
import Artists from './Pages/MainPages/Artists';
import Footer from './components/Footer';
import Header from './components/Header';
import ContactUs from './Pages/MainPages/ContactUs';
import ProductPage from './Pages/MainPages/ProductPage';

const Breadcrumb = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter((segment) => segment !== '');

  return (
    <div className="breadcrumb">
      {pathSegments.length > 0 && (
        <div className='text-gray-400 flex gap-3 m-5'>
          <span>HomePage</span>
          {pathSegments.map((segment, index) => (
            <span key={index}>
              {' > '}
              {index === pathSegments.length - 1 ? (
                <span>{segment}</span>
              ) : (
                <a href={`/${pathSegments.slice(0, index + 1).join('/')}`}>{segment}</a>
              )}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};
 
function App() {

  return (
    
    <div className="conatainer mx-auto">
      <Router>
        <Header />
        <Body />
        <Breadcrumb />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/shop' element={<Shop />}/>
          <Route path='/artists' element={<Artists />}/>
          <Route path='/contact' element={<ContactUs />}/>
          <Route path='/productpage/:itemId' element = {<ProductPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
   
  );
}

export default App;
