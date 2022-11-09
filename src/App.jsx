
import Header from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './components/Main';

function App() {


    return (
        <div className="App">
            <BrowserRouter >
                <Routes>
                    <Route path="/" index element={<Main />} />
                    <Route path="/header" element={<Header />} />
                    <Route path="/wrapper" element={<div className="wrapper"></div>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
