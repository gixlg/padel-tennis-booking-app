import React from 'react';
import './App.css';
import {SportSelection} from "./SportSelection";

function App() {
    return (
        <>
            <div className="container">
                <section className="hero">
                    <div className="hero-body">
                        <p className="title">Padle Tennis Booking App</p>
                        <p className="subtitle">A TDD sample application</p>
                    </div>
                </section>
            </div>

            <div className="container">
                <SportSelection/>
            </div>
        </>
    );
}

export default App;
