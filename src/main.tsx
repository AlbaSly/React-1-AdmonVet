import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

const root: Element = document.querySelector('#root')!;

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>
)