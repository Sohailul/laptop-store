import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Theory from './components/Theory/Theory';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Shop></Shop>
      <Theory></Theory>
    </div>
  );
}

export default App;
