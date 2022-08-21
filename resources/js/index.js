import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

if (document.getElementById('sisApp')) {
    ReactDOM.render(<App />, document.getElementById('sisApp'));
}