import "./App.css";
import { BrowserRouter as Router} from "react-router-dom";
import Home from "./pages";

function App() {
  return (
    <Router className="App">
      
        <Home/>
      
    </Router>
  );
}

export default App;
