import { Route,Routes} from "react-router-dom";
import Cbot from './components/Cbot';
import Infodisplay from './components/Infodisplay';
import Home from './components/Home'


function App() {
  return (
    <div>
      
 <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/cbot" element={<Cbot/>}/>
  <Route path="/Infodisplay" element={<Infodisplay/>}
/>
 </Routes>


    </div>
  );
}

export default App;
