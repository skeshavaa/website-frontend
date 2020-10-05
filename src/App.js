import React from 'react';
import 'antd/dist/antd.css';
import Navbar from './components/nav';
import Landing from './sections/landing';
import About from './sections/about';
import Skills from './sections/skills';
import Projects from './sections/projects';

function App() {
  return (
    <div>
      <Navbar />
      <Landing />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
