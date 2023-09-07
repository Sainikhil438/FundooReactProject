import logo from './logo.svg';
import './App.css';
import RegistrationForm from './pages/signup/signup.js';
import LoginForm from './pages/login/login.js';
import MiniDrawer from './Components/FundooAppBar';
import Min from './Components/Dashboard/practice';
import MenuAppBar from './Components/Dashboard/practice2';
import TakeNote from './Components/Dashboard/practice2';
import Router from './Router/Router';

function App() {
  return (
    // <div className="App">
    //   {/* <RegistrationForm/> */}
    //    {/* <LoginForm/>  */}
    //    {/* <MiniDrawer/> */}
    //    {/* <Min/> */}
    //    {/* <TakeNote/> */}
    // </div>
    <div>
      <Router/>

    </div>
  );
}

export default App;
