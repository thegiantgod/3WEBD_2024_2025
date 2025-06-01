import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './pages/App.tsx'
import ThemeContext from './contexts/themeContext.ts'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Todos from './pages/Todos.tsx'
import { Provider } from 'react-redux'
import todoStore from './stores/todoStore.ts'

function Root() {
  const [theme, setTheme] = useState<string>("dark");

  useEffect(() => {
    document.documentElement.className = theme; // applies class to <html> when we switch theme
  }, [theme]);

  return (
    <StrictMode>
      <Provider store={todoStore}>
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <BrowserRouter>
            <Routes>
              <Route index element={<App/>}/>
              <Route path="/todos" element={<Todos/>}/>
            </Routes>
          </BrowserRouter>
        </ThemeContext.Provider>
      </Provider>
    </StrictMode>
  );
}

createRoot(document.getElementById('root')!).render(<Root/>);
