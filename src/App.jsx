import './App.css';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Form from './Form.jsx';
import TopHeader from './TopHeader.jsx';
import Dashboard from './Dashboard.jsx';

function App() {

  return (
    <>
    <Router>
      <div>
        <TopHeader></TopHeader>
        <Switch>
          <Route path="/login" component={Form} />
          <Route path="/dashboard" component={Dashboard} />
          <Redirect from="/" to="/login" />
        </Switch> 
      </div>  
    </Router>
    </>
  )
}

export default App
