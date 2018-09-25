import React from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './styles.css';
import App from './pages/app';

render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.getElementById('root')
);
