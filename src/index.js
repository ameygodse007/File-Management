import {React, createContext} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AuthContextProvider } from './context/AuthContext';
export const AuthContext = createContext()
ReactDOM.render(
  <AuthContextProvider>
      <App />
    </AuthContextProvider>,
  document.getElementById('root')
);