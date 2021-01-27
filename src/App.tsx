import React, { useEffect } from 'react';

import Posts from './components/Posts'; 
import Header from './components/layout/Header';
import Aside from './components/layout/Aside';

function App() {
  return (
    <div className="App">
      <Header />
      <Aside />
    </div>
  );
}

export default App;
