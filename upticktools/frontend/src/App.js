import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/HomePage';
import './styles/App.css';


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/home" element={<Homepage />} /> 
            </Routes>
        </Router>
    );
}

export default App;
