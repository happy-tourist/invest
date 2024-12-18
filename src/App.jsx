import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import firebase from 'firebase/app';
import { auth } from './firebase';

function App() {
    alert('start')
    const [user, setUser] = useState(null);
    useEffect(() => {
        auth.onAuthStateChanged((currentUser) => {
            setUser(currentUser);
        });
    }, [])


    const [count, setCount] = useState(0)

    const handleLoginWithGoogle = () => {
        alert('handleLoginWithGoogle1')
        try {
            const provider = new firebase.auth.GoogleAuthProvider();
            alert('handleLoginWithGoogle2')
            auth.signInWithPopup(provider);
            alert('handleLoginWithGoogle3')
        } catch (error) {
            alert('Ошибка: ' + error.message)
        }
    };

    return (
        <>
            <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>

            <button onClick={handleLoginWithGoogle}>Войти через Google</button>
            {user ? <span>{user.displayName}</span> : <span>No</span>}
        </>
    )
}

export default App
