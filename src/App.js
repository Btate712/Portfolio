import './App.css';
import Cards from './containers/Cards';
import MyHeader from './components/MyHeader';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <MyHeader />
      <Welcome />
      <Cards />
    </div>
  );
}

export default App;
