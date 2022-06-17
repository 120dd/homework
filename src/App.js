import './App.css';
import { BrowserRouter , Route , Routes } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/home/home";
import ScrollToTop from "./components/scrollToTop";
import AnwserSheet from "./pages/answerSheet";

function App () {
    
    return (
        <BrowserRouter>
                <ScrollToTop>
                    <Header />
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/home' element={<Home/>}/>
                        <Route path='/answer' element={<AnwserSheet/>}/>
                    </Routes>
                </ScrollToTop>
        </BrowserRouter>
    );
}

export default App;
