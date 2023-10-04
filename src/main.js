import React from 'react';
import ReactDOM from 'react-dom/client';
import 'src/index.scss';
import routerProvider from 'src/utils/router-provider';
// import App from 'src/App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(routerProvider());

// root.render(
//   // <React.StrictMode>
//   <App />
//   // </React.StrictMode>
// );
