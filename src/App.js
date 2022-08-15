import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Main from './components/MainPage/Main';
import Section1 from './components/MainPage/Section1';
import Section2 from './components/MainPage/Section2';
import Section3 from './components/MainPage/Section3';
import SignUp from './components/LoginPage/SignUp';
import LogIn from './components/LoginPage/LogIn';
import './App.css';
import './tailwind.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SearchPage from './components/SearchPage';


function App() {


  return (

    <div className='flex'>
      <Router>
          <Routes>
            <Route path='/' element={< Main />} >
              <Route path='daily' element={<Section1 />} />
              <Route path='focus' element={<Section2 />} />
              <Route path='mood' element={<Section3 />} />
            </Route> 
            <Route path='signup' element={<SignUp />} /> 
            <Route path='search' element={<SearchPage />} /> 
            <Route path='login' element={<LogIn />} />
          </Routes>
          <Header/>     
          <Sidebar/>        
      </Router>
    </div>
  );
}

export default App;
