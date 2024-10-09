import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/Homepage';
import LoginPage from './components/LoginPage';
import './styles/App.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/home" element={<HomePage />} /> 
                <Route path="/login" element={<LoginPage />} /> 
            </Routes>
        </Router>
    );
}

export default App;
