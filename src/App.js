import React from 'react';
import 'antd/dist/antd.css';
import Navbar from './components/nav';
import Landing from './sections/landing';
import About from './sections/about';

function App() {
  return (
    <div>
      <Navbar />
      <Landing />
      <About />
    </div>
  );
}

export default App;
