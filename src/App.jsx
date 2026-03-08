import CoreConcept from "./components/CoreConcept.jsx";
import Header from "./components/Header.jsx";
import { CORE_CONCEPTS } from "./data.js";

function App() {
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
      </main>
    </div>
  );
}

export default App;
