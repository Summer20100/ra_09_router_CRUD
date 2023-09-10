import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Pages/Navbar/Navbar'
import Start from './Pages/Start/Start'
import NotFound from './Pages/NotFound/NotFound'
import Menu from './Pages/Menu/Menu'
import Crud from './Pages/Crud/Crud'
import Authentication from './Pages/Authentication/Authentication'
import HomePage from './Pages/Menu/components/HomePage'
import DriftPage from './Pages/Menu/components/DriftPage'
import TimeAttackPage from './Pages/Menu/components/TimeAttackPage'
import ForzaPage from './Pages/Menu/components/ForzaPage'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Crud />
    </div>

  );
}

export default App;
