import React from 'react';
import 'antd/dist/antd.css';
import Navbar from './components/nav';
import Landing from './sections/landing';
import About from './sections/about';
import Skills from './sections/skills';
import Projects from './sections/projects';
import Experience from './sections/experience';

function App() {
  return (
    <div>
      <Navbar />
      <Landing />
      <About />
      <Skills />
      <Experience />
      <Projects />
    </div>
  );
}

export default App;
