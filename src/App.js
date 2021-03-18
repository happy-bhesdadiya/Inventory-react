// import logo from './logo.svg';
// import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Sidebar from './Components/Sidebar';
import Home from './Components/Dashboard/Home';
import AddStock from './Components/Stock/AddStock';
import ListStock from './Components/Stock/ListStock';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>

        <Sidebar/>
        <Header/>

          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/add-stock' component={AddStock} />
            <Route path='/list-stock' component={ListStock} />
          </Switch>

        <Footer/>

      </Router>
    </div>
  );
}

export default App;
