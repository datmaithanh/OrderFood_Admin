import { Box } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import { Route, Routes, useLocation } from 'react-router';
import Home from './page/Home/Home';
import Login from './page/Auth/Login';
import Register from './page/Auth/Register';

function App() {
  const location = useLocation();
  const path = location.pathname;
  return (
    <Box>
      {path !== '/login' && path !== '/register' && <Navbar />}
      <Box
        bg="#FFFFFF"
        width={{ base: '100%', md: path === '/login' || path === '/register' ? '100%' : '86%' }}
        marginLeft={{ base: '0', md: path === '/login' || path === '/register' ? '0%' : '14%' }}
        p={2}
        minHeight="100vh"
        borderRadius={'md'}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="register" element={<Register />} />

          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Box>
    </Box>
  );
}

export default App;
