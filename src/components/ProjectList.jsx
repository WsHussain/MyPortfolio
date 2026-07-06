import { useState } from "react";
import { Link } from "react-router-dom";

const ProjectList = ({ projects }) => {
    const [hoveredProject, setHoveredProject] = useState(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        // Décalage pour que l'image de survol ne soit pas sous le curseur
        setMousePos({ x: e.clientX + 20, y: e.clientY - 150 });
    };

    return (
        <section id="projects" className="py-32 px-6" onMouseMove={handleMouseMove}>
            <div className="mb-16 border-b border-white/20 pb-4 flex justify-between items-baseline">
                <span className="text-sm uppercase tracking-widest text-white/50">01 / Portfolio</span>
                <span className="hidden md:inline text-xs uppercase tracking-widest text-white/30">
                    Cliquez sur un projet pour l'analyse détaillée
                </span>
            </div>

            <div className="flex flex-col">
                {projects.map((project, index) => (
                    <Link
                        to={`/projet/${project.slug}`}
                        key={project.slug}
                        className="project-item group relative py-12 border-b border-white/10 cursor-pointer transition-all hover:pl-4 block"
                        onMouseEnter={() => setHoveredProject(index)}
                        onMouseLeave={() => setHoveredProject(null)}
                    >
                        <div className="flex justify-between items-baseline z-20 relative mix-blend-difference">
                            <h2
                                className="text-5xl md:text-7xl font-display font-bold text-white group-hover:text-transparent transition-all duration-300"
                                style={{ WebkitTextStroke: hoveredProject === index ? "1px #fff" : "0px" }}
                            >
                                {project.title}
                            </h2>
                            <span className="text-sm uppercase tracking-widest text-white/40 group-hover:text-white transition-colors">
                                {project.category}
                            </span>
                        </div>
                        <p className="mt-4 text-white/50 max-w-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                            {project.description}
                        </p>

                        {/* Image flottante au survol (version Desktop uniquement) */}
                        {hoveredProject === index && (
                            <div
                                className="fixed hidden md:block pointer-events-none z-10 rounded-lg overflow-hidden w-[400px] h-[250px]"
                                style={{
                                    left: mousePos.x,
                                    top: mousePos.y,
                                    animation: "popIn 0.3s ease-out",
                                }}
                            >
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                            </div>
                        )}

                        {/* Image mobile (s'affiche juste en dessous sur mobile) */}
                        <div className="md:hidden mt-6 rounded-lg overflow-hidden">
                            <img src={project.image} alt={project.title} loading="lazy" className="w-full object-cover" />
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default ProjectList;
