import { useState } from 'react'
import reactLogo from '../assets/img/react.svg'
import account from "../assets/img/acc.svg";
import '../App.scss';
import { Link } from 'react-router-dom';


const Main = () => {
    const [count, setCount] = useState(0);

    return (
        <main>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={account} className="logo" alt="Vite logo" />
                </a>
                <a href="https://reactjs.org" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <Link to="/wrapper">
                    <button onClick={() => setCount((count) => count + 1)}>
                        to wrapper is {count}
                    </button>
                </Link>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </main>
    );
}

export default Main;