import { useEffect } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { projects, getProject } from "../data/projects";
import { getCompetence } from "../data/competences";
import { ArrowLeft, ArrowUpRight, GitHub } from "../components/Icons";
import { usePageMeta } from "../hooks/usePageMeta";

const Section = ({ number, title, children }) => (
    <section className="mb-16">
        <div className="mb-8 border-b border-white/20 pb-3">
            <span className="text-sm uppercase tracking-widest text-white/50">
                {number} / {title}
            </span>
        </div>
        {children}
    </section>
);

const ProjectDetail = () => {
    const { slug } = useParams();
    const project = getProject(slug);

    usePageMeta(
        project ? `${project.title} — Projet | Waqas Hussain` : "Projet introuvable",
        project ? `${project.description} Contexte, difficultés, apprentissages et compétences démontrées.` : undefined
    );

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!project) return <Navigate to="/" replace />;

    const index = projects.findIndex((p) => p.slug === slug);
    const next = projects[(index + 1) % projects.length];

    return (
        <main className="pt-28 px-6 max-w-5xl mx-auto">
            <Link to="/#projects" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-white/40 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" /> Tous les projets
            </Link>

            {/* En-tête */}
            <header className="mt-10 mb-16">
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-4">
                    <h1 className="text-6xl md:text-8xl font-display font-bold uppercase tracking-tighter text-white">
                        {project.title}
                    </h1>
                    <div className="text-sm uppercase tracking-widest text-white/40">
                        {project.category} — {project.year}
                    </div>
                </div>
                <p className="mt-6 text-xl text-white/60 font-light max-w-2xl">{project.description}</p>

                <div className="mt-8 flex flex-wrap gap-3">
                    {project.stack.map((tech) => (
                        <span key={tech} className="px-4 py-1.5 border border-white/20 rounded-full text-xs uppercase tracking-widest text-white/60">
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-6">
                    {project.github && (
                        <a href={project.github} target="_blank" rel="noreferrer"
                           className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-white/60 hover:text-white transition-colors">
                            <GitHub className="w-5 h-5" /> Code source
                        </a>
                    )}
                    {project.demo && (
                        <a href={project.demo} target="_blank" rel="noreferrer"
                           className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-white/60 hover:text-white transition-colors">
                            <ArrowUpRight /> Démo live
                        </a>
                    )}
                </div>
            </header>

            <Section number="01" title="Contexte">
                <p className="text-lg text-white/70 font-light leading-relaxed max-w-3xl">{project.contexte}</p>
            </Section>

            <Section number="02" title="Objectifs">
                <ul className="space-y-4 max-w-3xl">
                    {project.objectifs.map((obj, i) => (
                        <li key={i} className="flex gap-4 text-lg text-white/70 font-light">
                            <span className="text-accent">✦</span> {obj}
                        </li>
                    ))}
                </ul>
            </Section>

            <Section number="03" title="Réalisation">
                <div className="grid md:grid-cols-2 gap-8">
                    {project.images.map((img, i) => (
                        <figure key={i} className={project.images.length === 1 ? "md:col-span-2" : ""}>
                            <div className="rounded-lg overflow-hidden border border-white/10">
                                <img src={img.src} alt={`${project.title} — ${img.caption}`} loading="lazy" className="w-full object-cover" />
                            </div>
                            <figcaption className="mt-3 text-sm text-white/40">{img.caption}</figcaption>
                        </figure>
                    ))}
                </div>
            </Section>

            <Section number="04" title="Difficultés & Solutions">
                <div className="space-y-8 max-w-3xl">
                    {project.difficultes.map((d, i) => (
                        <div key={i} className="border-l-2 border-accent/50 pl-6">
                            <h3 className="text-lg font-bold text-white mb-2">{d.probleme}</h3>
                            <p className="text-white/60 font-light leading-relaxed">{d.solution}</p>
                        </div>
                    ))}
                </div>
            </Section>

            <Section number="05" title="Ce que j'ai appris">
                <p className="text-lg text-white/70 font-light leading-relaxed max-w-3xl">{project.apprentissages}</p>
            </Section>

            <Section number="06" title="Compétences démontrées">
                <div className="flex flex-wrap gap-3">
                    {project.competences.map((id) => {
                        const comp = getCompetence(id);
                        if (!comp) return null;
                        return (
                            <Link
                                key={id}
                                to={`/competences#${id}`}
                                className="px-5 py-3 border border-accent/40 rounded-full text-sm text-white/80 hover:bg-accent/10 hover:border-accent transition-colors"
                            >
                                {comp.titre}
                            </Link>
                        );
                    })}
                </div>
                <p className="mt-6 text-sm text-white/40">
                    Référentiel du Titre Professionnel Développeur Web et Web Mobile (RNCP niveau 5).
                </p>
            </Section>

            {/* Projet suivant */}
            <div className="border-t border-white/10 py-16 mb-8">
                <span className="text-sm uppercase tracking-widest text-white/40">Projet suivant</span>
                <Link
                    to={`/projet/${next.slug}`}
                    className="group flex items-baseline gap-4 mt-4 text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter text-white/30 hover:text-white transition-colors"
                >
                    {next.title}
                    <ArrowUpRight className="w-8 h-8 transform group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                </Link>
            </div>
        </main>
    );
};

export default ProjectDetail;
