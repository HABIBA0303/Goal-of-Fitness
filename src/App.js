import logo from './logo.svg';
import './App.css';
import Header from './component/header/Header';
import Services from './component/service/Services';
import Question from './component/question/Question';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Services></Services>
      <Question></Question>
    </div>
  );
}

export default App;
