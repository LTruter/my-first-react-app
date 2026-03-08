import CoreConcept from "./CoreConcept";
import Header from "./Header";
import componentsImg from "./assets/components.png";
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
