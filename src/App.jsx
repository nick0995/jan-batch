import { useState } from 'react';

import CoreConcepts from './component/CoreConcepts.jsx';
import Header from './component/Header/Header.jsx';
import TabButton from './component/TabButton.jsx';
import { CORE_CONCEPTS } from './data.js';

function App() {
  const [ selectedTopic, setSelectedTopic ] = useState("Please click a button")
  
  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton)
    // console.log(selectedButton);
  }
  
  console.log('APP COMPONENT EXECUTING');

  return (
    <div>  
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcepts 
              title= {CORE_CONCEPTS[0].title}
              description= {CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcepts {...CORE_CONCEPTS[1]}/>
            <CoreConcepts {...CORE_CONCEPTS[2]}/>
            <CoreConcepts {...CORE_CONCEPTS[3]}/>
          </ul>
        </section>
        <section id="examples">
          <h2>Example</h2>
          <menu>
            <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          {selectedTopic}
        </section>
      </main>
    </div>
  );
}

export default App;
