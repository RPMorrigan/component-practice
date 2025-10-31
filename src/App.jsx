import './App.css'
import PersonCard from './PersonFolder/PersonCard.jsx';
import Button from './PersonFolder/components/Button.jsx';

function App() {
  function handleClick() {
    console.log("Button clicked!");
  }
  return (
    <div>
      <PersonCard name={"Alice Wonderland"} age={19} occupation="Adventurer" />
      <PersonCard name="Bob Builder" age={35} occupation="Construction Worker" />
      <PersonCard name="Charlie Chocolate" age={50} occupation="Candy Maker" />

      <Button text="Click Me!" onClick={handleClick} />
    </div>
  )
};

export default App
