import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './config/i18n.ts';
import App from './pages/App.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Breeds from './pages/Breeds.tsx';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route index element={<App />}></Route>
          <Route path='/breeds' element={<Breeds/>}></Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>,
);
