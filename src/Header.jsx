// Import the image
import reactImg from "./assets/react-core-concepts.png";

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

// function to produce a random number
function genRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export default function Header() {
  // Stores the random description
  const desc = reactDescriptions[genRandomInt(reactDescriptions.length)];

  return (
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {desc} React concepts you will need for almost any app you are going to
        build!
      </p>
    </header>
  );
}
