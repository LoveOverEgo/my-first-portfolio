import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';

function App() {
  const [ tabs ] = useState([
    { name: 'About Me' },
    { name: 'Portfolio' },
    { name: 'Contact' },
    { name: 'Resume' }
  ]);

  const [ currentTab, setCurrentTab ] = useState(tabs[0])

  return (
    <div className="App">
      <Nav tabs={tabs} setCurrentTab={setCurrentTab} currentTab={currentTab}/>
      <div class="background"></div>
      <About />
    </div>
  );
}

export default App;
