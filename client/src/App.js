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

      <Route path ="/" element={<Home rHeading="Create Your Account"/>}/>
      <Route path ="/login" element={<Login/>}/>
      <Route path= "/register" element={<Register rHeading="Register First"/>}/>
      <Route path= "/barchart" element={<BarChart/>}/>
      </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App;
