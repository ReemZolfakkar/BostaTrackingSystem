import './App.css';
import './Assetes/order-details.css';
import './Assetes/tracking.css';
import './Assetes/order-details-table.css';
import "bootstrap/dist/css/bootstrap.min.css";
import './Assetes/progressbar.css'
import './Assetes/order-address.css'
import './Assetes/complains.css'
import { Routes,Route,BrowserRouter} from 'react-router-dom';
import Tracking from './Components/Tracking'
import NavBar from './Components/NavBar/NavBar'
import Home from './Components/Home/Home'
import LanguageContextProvider from './Translation/LanguageContext';
function App() {
  return (
   <BrowserRouter>
    <NavBar></NavBar>
    <div className="App">
      <LanguageContextProvider>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/tracking-shipment/track_num=:track_num' element={<Tracking></Tracking>}/>
      </Routes>
      </LanguageContextProvider>
    </div>
   </BrowserRouter>
  );
}

export default App;
