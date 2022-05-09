import { Routes, Route } from 'react-router-dom'
import './App.css';
import Nav from './components/Nav';
import CardPage from './pages/CardPage';
import ProductPage from './pages/ProductPage';
import SignInPage from './pages/SignInPage';

import { useSelector } from 'react-redux';



const UnAuthApp = () => {
  return <Routes>
    <Route path="/product" element={<ProductPage />} />
    <Route path="/signin" element={<SignInPage />} />
  </Routes>
}
const AuthApp = () => {
  return <Routes>
    <Route path="/product" element={<ProductPage />} />
    <Route path="/cart" element={<CardPage />} />
  </Routes>
}
function App() {
  const { user } = useSelector((state) => state.auth)
  return (
    <div className="App">
      <Nav />
      {!user ? <UnAuthApp /> : <AuthApp />}
    </div>
  );
}

export default App;
