import './App.css';
import FirstComponent from './components/FirtComponent.js';
import AnotherComponent from './components/AnotherComponent';
import Hooks from './components/Hooks';
import List from './components/List';

function App() {
  return (
    <div className="App">
      <h2>Hello</h2>
      <FirstComponent />
      <AnotherComponent />
      <Hooks></Hooks>
      <List></List>
    </div>
  );
}

export default App;
