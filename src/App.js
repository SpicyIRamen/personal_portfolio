import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Projects from './pages/Projects'
import Experience from './pages/Experience'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProjectDisplay from './pages/ProjectDisplay';
import history from './helpers/History';
import { useEffect } from 'react';

function App() {

    useEffect(() => {
        const handlePopState = () => {
            history.go(0);
        };

        window.addEventListener('popstate', handlePopState);

        const handleKeyDown = (event) => {
            if (event.key === 'ArrowLeft') {
                history.goBack();
            } else if (event.key === 'ArrowRight') {
                history.goForward();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('popstate', handlePopState);
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <div className="App">
            <Router history={history}>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/project/:id" element={<ProjectDisplay />} />
                    <Route path="/experience" element={<Experience />} />
                </Routes>
                <Footer />
            </Router>

        </div>
    );
}

export default App;
