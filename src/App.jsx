
import Header from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

function App() {

    console.log("hello");
    return (
        <div className="App">
            <BrowserRouter basename="/ViteTestBuild">
                <Routes>
                    <Sidebar />
                    <Route path="/" index element={<Main />} />
                    <Route path="/header" element={<Header />} />
                    <Route path="/wrapper" element={<div className="wrapper"></div>} />
                    <Footer />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
