import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Login } from './components/Login';
import { Register } from './components/Register';
import { Home } from './components/Home';
import BarChart from './components/BarChart';


function App() {



  return(
    <div className="container">
      <BrowserRouter>

      <Routes>

      <Route exact path ="/" element={<Home rHeading="Create Your Account"/>}/>
      <Route exact path ="/login" element={<Login/>}/>
      <Route exact path= "/register" element={<Register rHeading="Register First"/>}/>
      <Route exact path= "/barchart" element={<BarChart/>}/>
      </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App;
