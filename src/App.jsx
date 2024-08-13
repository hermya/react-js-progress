import { useState } from 'react';

import { CORE_CONCEPTS, EXAMPLES } from './data';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcepts.jsx';
import TabButton from './components/TabButton.jsx';

function App() {
  const [tabContent, setTabContent] = useState();
  const [selectedTab, setSelectedTab] = useState();

  const handleClick = (selectedButton) => {
    //alert(selectedButton);
    setTabContent(EXAMPLES[selectedButton]);
    setSelectedTab(selectedButton);
  };

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} image={CORE_CONCEPTS[0].image} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>
            Examples
          </h2>
          <menu>
            <TabButton onClick={() => handleClick('components')} isSelected={selectedTab == 'components'} >Components</TabButton>
            <TabButton onClick={() => handleClick('jsx')} isSelected={selectedTab == 'jsx'}>JSX</TabButton>
            <TabButton onClick={() => handleClick('props')} isSelected={selectedTab == 'props'}>Props</TabButton>
            <TabButton onClick={() => handleClick('state')} isSelected={selectedTab == 'state'}>States</TabButton>
          </menu>
          {
            !tabContent ?
              <p>Please select a topic!</p> :
              <div id="tab-content">
                <h3>{tabContent.title}</h3>
                <p>{tabContent.description}</p>
                <pre>
                  <code>{tabContent.code}</code>
                </pre>
              </div>
          }

        </section>
      </main>
    </div>
  );
}

export default App;
