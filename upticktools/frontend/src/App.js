import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import './styles/App.css';
import LoginPage from './components/LoginPage';


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
