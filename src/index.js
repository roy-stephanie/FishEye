import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import App from './App';
import './index.css';
import Layout from "./components/layout/Layout";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Layout>
            <App/>
        </Layout>
    </React.StrictMode>
);

reportWebVitals();
