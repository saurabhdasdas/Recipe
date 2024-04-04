import './App.css';
import Home from './pages/Home';
import{BrowserRouter,Routes,Route} from'react-router-dom'
import Signup from './pages/Signup';
import Login from './pages/Login';
import Navbar from './componenta/Navbar';
import SingleRecpie from './pages/SingleRecpie';

function App() {
     
     
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/'element={<Home />}/>
      <Route path='/Signup'element={<Signup />}/>
      <Route path='/Login'element={<Login />}/>
      <Route path='/SingleRecpie'element={<SingleRecpie/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
  }

export default App;
