import './App.css';
import{ Routes,Route} from 'react-router-dom'
import Home from './Components/Home';
import Schdule from './Components/Schdule'
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
    
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='Schedule' element={<Schdule />}/>
        
      </Routes>

     </div>
  );
}

export default App;
