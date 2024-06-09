import './App.css';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Form from './Form.jsx';
import TopHeader from './TopHeader.jsx';


function App() {

  return (
    <>
    <Router>
      <TopHeader></TopHeader>
      <Form></Form>
    </Router>
    </>
  )
}

export default App
