import './App.css';
import Translator from './components/translator';

function App() {
  console.log(process.env.REACT_APP_API_KEY);

  return (
    <div className="App">
      <Translator />
    </div>
  );
}

export default App;
