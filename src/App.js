import React from 'react';
import { useLocation } from 'react-router-dom';
import MyRouter from './router/MyRouter';
import Navbar from './components/navbar';
import Post from './components/post';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  const location = useLocation();

  // Hide Navbar on login page
  const hideNavbarRoutes = ['/', '/register'];
  
  const shouldShowNavbar = !hideNavbarRoutes.includes(location.pathname);

  return (
    <div>
      {shouldShowNavbar && <Navbar />}
      <MyRouter />
    </div>
  );
}

export default App;
