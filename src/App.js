
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
// import About from './components/About';
import Alert from './components/Alert';
// import {
//     BrowserRouter as Router,
//     Routes,
//     Route,
// } from "react-router-dom";


function App() {
    const [mode, setMode] = useState('light');
    const [alert, setAlert] = useState(null);

    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type
        })
        setTimeout(() => {
            setAlert(null);
        }, 1500);
    }

    const toggleMode = () => {
        if (mode === 'light') {
            setMode('dark')
            document.body.style.backgroundColor = '#162648'
            showAlert("Dark mode has been enabled", "success")
            // document.title= 'TextUtils - dark'
        }
        else {
            setMode('light')
            document.body.style.backgroundColor = 'white'
            showAlert("Light mode has been enabled", "success")
            // document.title= 'TextUtils - light'
        }
    }
    return (
        <>
            {/* <Router>
                <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />
                <Alert alert={alert} />
                <div className="container my-3">
                    <Routes>
                        <Route path="/about" exact element={<About />} ></Route>
                        <Route path="/" exact element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />}> </Route>
                    </Routes>
                </div>
            </Router> */}


            <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />
            <Alert alert={alert} />
            <div className="container my-3">
                {/* <About /> */}
                <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />
            </div>

        </>
    );
}

export default App;
