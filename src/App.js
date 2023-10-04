import React from 'react';
import { Outlet } from 'react-router-dom';

import MainHeader from './components/MainHeader';
// import MainContent from './components/MainContent';

function App() {
    return (
        <div className="App">
            <MainHeader />
            <Outlet />
            {/* <MainContent /> */}
        </div>
    );
}

export default App;
