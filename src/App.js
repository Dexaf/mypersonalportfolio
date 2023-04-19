import './App.css';
import "bulma/css/bulma.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./components/Navbar/Navbar"
import {
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import AboutMe from './components/AboutMe/AboutMe';
import Skills from './components/SkillPage/Skills/Skills';
import Footer from './components/Footer/Footer';
import MyCv from './components/MyCv/MyCv';
import { Contacts } from './components/Contacts/Contacts';
import Portfolio from './components/Portfolio/Portfolio';

function App() {
    return (
        <>
            <Navbar />
            <main className='container py-5'>
                <Routes>
                    <Route path='/' element={<Navigate replace to='/AboutMe' />}>
                    </Route>
                    <Route path='/AboutMe' element={<AboutMe />}>
                    </Route>
                    <Route path='/Skills' element={<Skills />}>
                    </Route>
                    <Route path='/Portfolio' element={<Portfolio />}>
                    </Route>
                    <Route path='/MyCv' element={<MyCv />}>
                    </Route>
                    <Route path='/Contacts' element={<Contacts />}>
                    </Route>
                </Routes>
            </main>
            <Footer />
        </>
    );
}

export default App;