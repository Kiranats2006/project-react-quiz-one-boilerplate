import './App.css';
import HomeComponent from './components/Quiz components';
import QuizComponent from './components/HomeComponents';
import ResultComponent from './components/ResultComponents';

function App() {
  return (
    <div className="App">
      <HomeComponent />
      <QuizComponent />
      <ResultComponent />
    </div>
  );
}

export default App;