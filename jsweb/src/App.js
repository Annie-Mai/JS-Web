import './App.css';
import Home from './components/Home';
import About from './components/About';
import NavBar from './NavBar';
import Footer from './components/Footer';
import Services from './components/Services';
import {Route, Routes} from 'react-router-dom';



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
        <Footer/>
    </>
        
    );
}

export default App;
