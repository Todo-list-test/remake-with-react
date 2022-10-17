import './App.css';
import Header from './component/Header.js';
import Home from './component/Home.js';
import HowItWorks from './component/HowItWorks.js';
import OurMenu from './component/OurMenu.js';
import WhatTheSay from './component/WhatTheSay.js';
import Adertisement from './component/Adertisement.js';
import Footer from './component/Footer.js';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <HowItWorks />
        <OurMenu />
        <WhatTheSay />
        <Adertisement />
      </main>
      <Footer />
    </div>
  );
}

export default App;
