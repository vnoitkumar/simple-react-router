import React, { useState } from 'react';
import Tab from '@material/react-tab';
import TabBar from '@material/react-tab-bar';

import '@material/react-tab-bar/dist/tab-bar.css';
import '@material/react-tab-scroller/dist/tab-scroller.css';
import '@material/react-tab/dist/tab.css';
import '@material/react-tab-indicator/dist/tab-indicator.css';

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  function handleActiveIndexUpdate(activeIndex) {
    setActiveIndex(activeIndex);
  }

  return (
    <div>
      <TabBar
        activeIndex={activeIndex}
        handleActiveIndexUpdate={handleActiveIndexUpdate}
      >
        <Tab>
          <span className='mdc-tab__text-label'>Home</span>
        </Tab>

        <Tab>
          <span className='mdc-tab__text-label'>About</span>
        </Tab>

        <Tab>
          <span className='mdc-tab__text-label'>Contact</span>
        </Tab>
      </TabBar>

      <div>
        <Component index={activeIndex} />
      </div>
    </div>
  );
}

function Component({ index }) {
  switch (index) {
    case 0:
      window.history.pushState({}, 'Home', '/home'); // state, title, url
      return <h1>Home</h1>;

    case 1:
      window.history.pushState({}, 'About', '/about');
      return <h1>About</h1>;

    case 2:
      window.history.pushState({}, 'Contact', '/contact');
      return <h1>Contact</h1>;

    default:
      window.history.pushState({}, 'Home', '/home');
      return <h1>Home</h1>;
  }
}

export default App;
