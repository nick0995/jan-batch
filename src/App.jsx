import { useState } from 'react'; //hook

import CoreConcepts from './component/CoreConcepts.jsx';
import Header from './component/Header/Header.jsx';
import TabButton from './component/TabButton.jsx';
import { CORE_CONCEPTS, EXAMPLES } from './data.js';

function App() {
  const [ selectedTopic, setSelectedTopic ] = useState();
  
  function handleSelect(selectedButton) {
    // selectedTopic => components jsx props state
    setSelectedTopic(selectedButton)
    // console.log(selectedButton);
  }
  
  console.log('APP COMPONENT EXECUTING');

  let tableContent = <p>Please select a topic.</p>
  
  if(selectedTopic) {
    tableContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>
          {EXAMPLES[selectedTopic].description}
        </p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    )
  }

  return (
    <div>  
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) =>(
              <CoreConcepts key={conceptItem.title}  {...conceptItem} />
            ))}
            {/* <CoreConcepts 
              title= {CORE_CONCEPTS[0].title}
              description= {CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcepts {...CORE_CONCEPTS[1]}/>
            <CoreConcepts {...CORE_CONCEPTS[2]}/>
            <CoreConcepts {...CORE_CONCEPTS[3]}/> */}
          </ul>
        </section>
        <section id="examples">
          <h2>Example</h2>
          <menu>
            <TabButton 
              isSelected={selectedTopic === 'components'}
              onSelect={() => handleSelect('components')}
            >Components</TabButton>
            <TabButton 
              isSelected={selectedTopic === 'jsx'}
              onSelect={() => handleSelect('jsx')}
            >JSX</TabButton>
            <TabButton 
              isSelected={selectedTopic === 'props'}
              onSelect={() => handleSelect('props')}
            >Props</TabButton>
            <TabButton 
              isSelected={selectedTopic === 'state'}
              onSelect={() => handleSelect('state')}
            >State</TabButton>
          </menu>
          {tableContent}
        </section>
      </main>
    </div>
  );
}

export default App;
