import logo from './logo.svg';
import './App.css';
import RegistrationForm from './pages/signup/signup.js';
import LoginForm from './pages/login/login.js';
import MiniDrawer from './Components/FundooApp';
import Router from './Router/Router';
import Elevation from './Components/Dashboard/Paper';
import Form from './Components/Dashboard/Notes/Form';
import Makenote1 from './Components/Makenote1';
import Makenote2 from './Components/Makenote2';
import FundooApp from '../src/Components/FundooApp';
import Home from '../src/Components/Home'

function App() {
  return (
    //  <div className="App">
    //    {/* <RegistrationForm/>  */}
    //    {/* <LoginForm/>  */}
    //    {/* <MiniDrawer/> */}
    //    {/* <Elevation/> */}
    //    {/* <Form/> */}
    //  </div>
    <div>
      {/* <Home/> */}
      <Router/>
      {/* <FundooApp/>
      <Makenote1/>
      <Makenote2/> */}
    </div>
  );
}

export default App;
