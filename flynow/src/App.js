import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import BaseRouter from "./routes"

class App extends Component {

    render() {
        return (
            <div>
                <Router>
                    <BaseRouter />
                </Router>
            </div>
        );
    }
}

export default App; 
