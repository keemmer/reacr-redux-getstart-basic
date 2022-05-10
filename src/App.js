import { Routes, Route } from 'react-router-dom'
import './App.css';
import Nav from './components/Nav';
import CartPage from './pages/CartPage';
import ProductPage from './pages/ProductPage';
import SignInPage from './pages/SignInPage';


function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/product" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/signin" element={<SignInPage />} />

      </Routes>

    </div>
  );
}

export default App;
