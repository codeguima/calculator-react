import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css'; // Estilos globais, se necessário
import App from './App'; // Importa o componente raiz

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        Calculadora
        <App />
    </React.StrictMode>
);
