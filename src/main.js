import React from 'react';
import ReactDOM from 'react-dom/client';
import 'src/index.css';
import useRouterProvider from 'src/use/useRouterProvider';
// import App from 'src/App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(useRouterProvider());

// root.render(
//   // <React.StrictMode>
//   <App />
//   // </React.StrictMode>
// );
