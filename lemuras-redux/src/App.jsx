import './App.css';
import AddBoy from './Components/AddBoy';
import AddGirl from './Components/AddGirl';
import Boys from './Components/Boys';
import Girls from './Components/Girls';

function App() {
  return (
    <div className="App">
      <h1>Boys & Girls</h1>
      <div className="cols">
        <div>
        <Boys></Boys>
        <Girls></Girls>
        </div>
        <div>
        <AddBoy></AddBoy>
        <AddGirl></AddGirl>
        </div>
      </div>
    </div>
  );
}

export default App;
