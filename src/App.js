import './App.css';
import './Assetes/order-details.css';
import './Assetes/tracking.css';
import './Assetes/order-details-table.css';
import "bootstrap/dist/css/bootstrap.min.css";
import './Assetes/progressbar.css'
import { Routes,Route,BrowserRouter} from 'react-router-dom';
import Tracking from './Components/Tracking'
import NavBar from './Components/NavBar/NavBar'
import Complains from './Components/TrackingShipment/Complains'
function App() {
  return (
   <BrowserRouter>
    <NavBar></NavBar>
    <div className="App">
      <Routes>
        <Route path='/' element={<Complains></Complains>}></Route>
        <Route path='/tracking-shipment/track_num=:track_num' element={<Tracking></Tracking>}/>
      </Routes>
    </div>
   </BrowserRouter>
  );
}

export default App;
