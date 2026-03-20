import CoreConcept from "./components/CoreConcept/CoreConcept.jsx";
import Header from "./components/Header/Header.jsx";
import TabButton from "./components/TabButton/TabButton.jsx";
import { CORE_CONCEPTS } from "./data.js";

function App() {
  function handleClick() {
    console.log("Hello World!");
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((CORE_CONCEPT) => {
              return (
                <CoreConcept
                  title={CORE_CONCEPT.title}
                  description={CORE_CONCEPT.description}
                  image={CORE_CONCEPT.image}
                />
              );
            })}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onClick={handleClick}>Components</TabButton>
            <TabButton onClick={handleClick}>JSX</TabButton>
            <TabButton onClick={handleClick}>Props</TabButton>
            <TabButton onClick={handleClick}>State</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
