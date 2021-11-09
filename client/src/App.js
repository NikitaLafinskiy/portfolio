import Landing from '../src/Pages/Landing/Landing';
import Sidebar from '../src/Components/Sidebar';
import Main from '../src/Components/Main';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Projects from './Pages/Projects';
import Info from './Pages/Info';

function App() {
  return (
    <Router>
      <Route exact path='/' component={Landing} />
      <Route exact path='/projects' component={Projects} />
      <Route exact path='/info' component={Info} />
      <div style={{ width: '60px' }}></div>
      <Sidebar />
    </Router>
  );
}

export default App;
