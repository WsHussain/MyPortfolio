import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
import Competences from "./pages/Competences";

const App = () => {
    const [isContactOpen, setIsContactOpen] = useState(false);

    return (
        <div className="relative">
            <Navbar onContact={() => setIsContactOpen(true)} />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projet/:slug" element={<ProjectDetail />} />
                <Route path="/competences" element={<Competences />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>

            <Footer onContact={() => setIsContactOpen(true)} />

            <Contact isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
        </div>
    );
};

export default App;
