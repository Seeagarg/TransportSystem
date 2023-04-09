import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
// import Home from './Components/Home/Home';
// import About from './Components/About';
import Login from './Components/Login';
import Header from './Components/Header';
import Partner from './Screens/BeAPartner/Partner';
import Footer from './Components/Footer';
import Home_Page from './Screens/Home/Home_page';
import About from './Screens/About/About';
import GetCabPage from './Screens/GetCab/GetCabPage';


function App() {
  // const { basename = '' } = React.useContext(MyContext);
  return (
    <div className="App">
    
    <Router>
    {/* <Header  title={"Street Cab"} /> */}
      <Routes>
      {/* <Route index path='/' element={<Header title={"Street Cab"}/>}/> */}
        <Route index path='/' element={<Home_Page/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Partner' element={<Partner/>}/>
        <Route path='/getcab' element={<GetCabPage/>}/>
        
      </Routes>
    </Router>
    {/* <Footer/> */}
      
    </div>
  );
}

export default App;
