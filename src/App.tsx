import { Box } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router';
import Home from './page/Home/Home';

function App() {
  return (
    <Box>
      <Navbar />
      <Box bg="#EFECE3" width={{ base: '100%', md: '86%' }} marginLeft={{ base: '0', md: '14%' }} p={2} minHeight="100vh" borderRadius={'md'}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Box>
    </Box>
  );
}

export default App;
