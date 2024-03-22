import "./App.css";
import AddingUser from "./components/AddingUser";
import MyComponent from "./components/MyComponent";
import FetchingSingleUser from "./components/FetchingSingleUser";
import Navabar from "./components/Navabar";

function App() {
  return (
    <div className="App">
      <Navabar />
      <FetchingSingleUser />
      <MyComponent />
      <AddingUser />
    </div>
  );
}

export default App;
