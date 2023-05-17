import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import { Bdesign } from './Bdesign';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Bdesign/>}/>
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
