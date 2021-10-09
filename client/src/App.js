import Landing from "../src/Pages/Landing/Landing";
import Sidebar from "../src/Components/Sidebar";
import Main from "../src/Components/Main";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route exact path='/' component={Landing} />
      <div style={{ width: "60px" }}></div>
      <Sidebar />
    </Router>
  );
}

export default App;
