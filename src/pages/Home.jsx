import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import ProjectList from "../components/ProjectList";
import About from "../components/About";
import { projects } from "../data/projects";
import { usePageMeta } from "../hooks/usePageMeta";

const skills = ["HTML", "CSS", "JAVASCRIPT", "REACT", "NODE.JS", "PHP", "MYSQL", "TAILWIND", "GIT", "UI/UX", "FIGMA"];

const Home = () => {
    usePageMeta(
        "Waqas Hussain — Développeur Web Full Stack | Portfolio",
        "Portfolio de Waqas Hussain, développeur web et web mobile full stack basé en France. Projets, compétences RNCP, parcours et contact."
    );

    const location = useLocation();

    // Défilement vers l'ancre (#projects / #about) y compris en arrivant d'une autre page
    useEffect(() => {
        if (location.hash) {
            const el = document.getElementById(location.hash.slice(1));
            if (el) el.scrollIntoView({ behavior: "smooth" });
        } else {
            window.scrollTo(0, 0);
        }
    }, [location]);

    return (
        <main>
            <Hero />
            <Marquee items={skills} />
            <ProjectList projects={projects} />
            <Marquee items={["Creative", "Developer", "Designer", "Freelance"]} reverse={true} />
            <About />
        </main>
    );
};

export default Home;
