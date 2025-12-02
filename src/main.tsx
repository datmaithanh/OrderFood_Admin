import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { Provider as ChakraProvider } from './components/ui/provider.tsx';
import { BrowserRouter } from "react-router";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </StrictMode>
);
