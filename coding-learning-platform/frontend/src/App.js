import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Courses from './pages/Courses';
import Quiz from './pages/Quiz';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Courses} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
                <ProtectedRoute path="/quiz" component={Quiz} />
            </Switch>
        </Router>
    );
}

export default App;