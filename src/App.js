import React from 'react';
import { Outlet } from 'react-router-dom';

import MainHeader from 'src/components/MainHeader';
// import ControllerFeed from 'src/components/ControllerFeed';

function App() {
  return (
    <div className="App">
      <MainHeader />
      <Outlet />
      {/* <ControllerFeed /> */}
    </div>
  );
}

export default App;
