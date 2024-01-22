import CoreConcepts from './component/CoreConcepts.jsx';
import Header from './component/Header/Header.jsx';
import Examples from './component/Examples.jsx';

function App() { //comp
  console.log('APP COMPONENT EXECUTING');

  // fragments
  return (
    <> 
      <div>
        <Header />
        <main>
          <CoreConcepts />
          <Examples />
        </main>
      </div>
    </>
  );
}

export default App;
