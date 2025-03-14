import './App.css';
import Home from './components/Home';
import About from './components/About';
import NavBar from './NavBar';
import Services from './components/Services';
import { BrowserRouter, Route, Routes} from 'react-router-dom';



function App() {

    return (
    <>
        <NavBar/>
            <div className='containter'>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/home' element={<Home/>}></Route>
                <Route path='/about' element={<About/>}></Route>
                <Route path='/services' element={<Services/>}></Route>
            </Routes>
        </div>
    </>
        
    );
}

export default App;
