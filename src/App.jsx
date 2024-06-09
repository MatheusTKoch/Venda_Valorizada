import './App.css';
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import Form from './Form.jsx';
import TopHeader from './TopHeader.jsx';
import Dashboard from './Dashboard.jsx';

function App() {

  return (
    <>
    <Router>
      <div>
        <TopHeader></TopHeader>
        <Routes>
          <Route path="/login" element={<Form />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes> 
      </div>  
    </Router>
    </>
  )
}

export default App
