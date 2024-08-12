import reactImg from './assets/react-core-concepts.png';
const reactDescriptions = ['Fundamental','Crucial','Important', 'Core']

function Header() {
  function getRandomInt() {
    return Math.floor(Math.random() * reactDescriptions.length)
  }
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {reactDescriptions[getRandomInt()]} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
