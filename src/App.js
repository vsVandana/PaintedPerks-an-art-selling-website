import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Body from './components/Body';
import Home from './Pages/MainPages/Home';
import Shop from './Pages/MainPages/Shop';
import Artists from './Pages/MainPages/Artists';
import Footer from './components/Footer';
import Header from './components/Header';
import ContactUs from './Pages/MainPages/ContactUs';
import ProductPage from './Pages/MainPages/ProductPage';
import ScrollToTop from './Pages/ScrollToTop';
import Cart from './Pages/Cart';
import Products from './Pages/Products';
import AdminDashboard from './Admin';
import Login from './Pages/MainPages/auth/Login'; 
import Signup from './Pages/MainPages/auth/SignUp'; 
import Users from './Pages/Users'

const Breadcrumb = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter((segment) => segment !== '');

  return (
    <div className="breadcrumb">
      {pathSegments.length > 0 && (
        <div className="text-gray-400 flex gap-3 m-5">
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
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith('/admin');
  const hideHeaderFooterRoutes = ['/login', '/signup']; // Routes where Header/Footer should be hidden
  const hideHeaderFooter = hideHeaderFooterRoutes.includes(location.pathname);

  return (
    <div>
      <ScrollToTop />
      {/* Conditionally render Header and Footer */}
      {!isAdminPage && !hideHeaderFooter && <Header />}
      <Body />
      {!isAdminPage && !hideHeaderFooter && <Breadcrumb />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/productpage/:itemId" element={<ProductPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin" element={<AdminDashboard />}>
          <Route path="/admin/products" element={<Products />} />
          <Route path="/admin/users" element={<Users />} />
        </Route>
      </Routes>
      {!isAdminPage && !hideHeaderFooter && <Footer />}
    </div>
  );
}

export default App;
