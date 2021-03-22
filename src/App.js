import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
import Resume from './components/Resume';

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
      <div className="background"></div>
      <main>
        {currentTab === tabs[0] && <About />}
        {currentTab === tabs[1] && <Portfolio />}
        {currentTab === tabs[2] && <ContactForm />}
        {currentTab === tabs[3] && <Resume />}
      </main>
      <footer>
        <div className="social-icons">
          <a href="https://stackoverflow.com/users/13529182/michael-arvelo" target="_blank" rel='noreferrer' title="Stack OverFlow">
              <i className="fab fa-stack-overflow"></i>
          </a>
          <a href="https://github.com/MichaelDevelopsCode" target="_blank" rel='noreferrer' title="GitHub">
              <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/michael-arvelo-169925148/" target="_blank" rel='noreferrer' title="LinkedIn">
              <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://twitter.com/MichaelDevsCode" target="_blank" rel='noreferrer' title="Twitter">
              <i className="fab fa-twitter"></i>
          </a>
        </div>
        <div>
            &copy; 2020 Michael (Miguel) Arvelo
        </div>
      </footer>
    </div>
  );
}

export default App;
