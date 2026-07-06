import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { blocs, competences, niveauLabels } from "../data/competences";
import { projects, getProject } from "../data/projects";
import { usePageMeta } from "../hooks/usePageMeta";

const NiveauJauge = ({ niveau }) => (
    <div className="flex items-center gap-3">
        <div className="flex gap-1.5" role="img" aria-label={`Niveau ${niveau} sur 4 — ${niveauLabels[niveau]}`}>
            {[1, 2, 3, 4].map((n) => (
                <span
                    key={n}
                    className={`w-8 h-1.5 rounded-full ${n <= niveau ? "bg-accent" : "bg-white/15"}`}
                />
            ))}
        </div>
        <span className="text-xs uppercase tracking-widest text-white/40">{niveauLabels[niveau]}</span>
    </div>
);

const CompetenceCard = ({ comp, index }) => (
    <article id={comp.id} className="py-10 border-b border-white/10 scroll-mt-28">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white max-w-2xl">
                <span className="text-white/30 mr-3">{String(index).padStart(2, "0")}</span>
                {comp.titre}
            </h3>
            <NiveauJauge niveau={comp.niveau} />
        </div>
        <p className="text-white/60 font-light leading-relaxed max-w-3xl mb-6">{comp.analyse}</p>
        <div className="flex flex-wrap gap-2 items-center">
            <span className="text-xs uppercase tracking-widest text-white/40 mr-2">Preuves :</span>
            {comp.projets.map((slug) => {
                const p = getProject(slug);
                if (!p) return null;
                return (
                    <Link
                        key={slug}
                        to={`/projet/${slug}`}
                        className="px-4 py-1.5 border border-white/20 rounded-full text-xs uppercase tracking-widest text-white/60 hover:border-accent hover:text-white transition-colors"
                    >
                        {p.title}
                    </Link>
                );
            })}
        </div>
    </article>
);

const Competences = () => {
    usePageMeta(
        "Compétences RNCP — Waqas Hussain | Développeur Web et Web Mobile",
        "Auto-évaluation des compétences du titre RNCP Développeur Web et Web Mobile (niveau 5), reliées aux projets qui les démontrent."
    );

    const location = useLocation();
    useEffect(() => {
        if (location.hash) {
            const el = document.getElementById(location.hash.slice(1));
            if (el) el.scrollIntoView({ behavior: "smooth" });
        } else {
            window.scrollTo(0, 0);
        }
    }, [location]);

    return (
        <main className="pt-28 px-6 max-w-5xl mx-auto">
            <header className="mb-20">
                <h1 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter text-white">
                    Compétences <span className="text-white/40">RNCP</span>
                </h1>
                <p className="mt-8 text-lg text-white/60 font-light leading-relaxed max-w-3xl">
                    Titre Professionnel <strong className="font-semibold text-white/80">Développeur Web et Web Mobile</strong> (niveau 5).
                    Chaque compétence du référentiel est auto-évaluée et reliée aux projets qui en apportent la preuve.
                    Ce portfolio est hybride : il documente autant ma progression d'apprentissage que mes réalisations abouties.
                </p>
            </header>

            {blocs.map((bloc) => (
                <section key={bloc.id} className="mb-20">
                    <div className="mb-4 border-b border-white/20 pb-4">
                        <span className="text-sm uppercase tracking-widest text-accent">Bloc {bloc.id}</span>
                        <h2 className="mt-2 text-xl md:text-2xl font-display font-bold text-white/80">{bloc.titre}</h2>
                    </div>
                    {competences
                        .filter((c) => c.bloc === bloc.id)
                        .map((comp, i) => (
                            <CompetenceCard key={comp.id} comp={comp} index={(bloc.id - 1) * 4 + i + 1} />
                        ))}
                </section>
            ))}

            {/* Matrice projets × compétences */}
            <section className="mb-20">
                <div className="mb-8 border-b border-white/20 pb-4">
                    <span className="text-sm uppercase tracking-widest text-white/50">Vue d'ensemble</span>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[640px]">
                        <thead>
                            <tr className="border-b border-white/20">
                                <th className="py-3 pr-4 text-xs uppercase tracking-widest text-white/40 font-normal">Projet</th>
                                {competences.map((c, i) => (
                                    <th key={c.id} className="py-3 px-2 text-center text-xs uppercase tracking-widest text-white/40 font-normal">
                                        <Link to={`/competences#${c.id}`} className="hover:text-white" title={c.titre}>
                                            C{i + 1}
                                        </Link>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {projects.map((p) => (
                                <tr key={p.slug} className="border-b border-white/5">
                                    <td className="py-3 pr-4">
                                        <Link to={`/projet/${p.slug}`} className="text-sm text-white/70 hover:text-white uppercase tracking-wider">
                                            {p.title}
                                        </Link>
                                    </td>
                                    {competences.map((c) => (
                                        <td key={c.id} className="py-3 px-2 text-center">
                                            {p.competences.includes(c.id) ? (
                                                <span className="text-accent">✦</span>
                                            ) : (
                                                <span className="text-white/10">·</span>
                                            )}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <p className="mt-4 text-xs text-white/30">
                    C1–C4 : bloc front-end · C5–C8 : bloc back-end. Survolez un numéro pour l'intitulé complet.
                </p>
            </section>

            {/* Progression */}
            <section className="mb-24">
                <div className="mb-8 border-b border-white/20 pb-4">
                    <span className="text-sm uppercase tracking-widest text-white/50">Ma progression</span>
                </div>
                <div className="space-y-10 max-w-3xl">
                    <div className="border-l-2 border-white/15 pl-6">
                        <h3 className="text-lg font-bold text-white mb-2">Des fondations front-end…</h3>
                        <p className="text-white/60 font-light leading-relaxed">
                            J'ai commencé par le socle HTML/CSS et le maquettage (site Keshi), puis le JavaScript vanilla
                            avec un vrai défi algorithmique (Puissance 4). Garder les deux versions de ma Todo List montre
                            concrètement le saut de qualité apporté par React et par une meilleure structuration du code.
                        </p>
                    </div>
                    <div className="border-l-2 border-white/15 pl-6">
                        <h3 className="text-lg font-bold text-white mb-2">…au back-end et aux données…</h3>
                        <p className="text-white/60 font-light leading-relaxed">
                            My Cinema et SQL Admin m'ont fait passer côté serveur : conception de bases relationnelles,
                            requêtes préparées, logique métier en PHP. Le clone Twitter assemble ensuite tout le spectre
                            full stack, avec un vrai travail sur la sécurité (authentification, injection, XSS).
                        </p>
                    </div>
                    <div className="border-l-2 border-accent/60 pl-6">
                        <h3 className="text-lg font-bold text-white mb-2">…jusqu'à l'industrialisation</h3>
                        <p className="text-white/60 font-light leading-relaxed">
                            Ce portfolio lui-même documente l'étape en cours : outillage moderne (Vite, Tailwind, Git),
                            déploiement continu sur Vercel, SEO et performance. Prochains objectifs : approfondir Node.js,
                            pratiquer une base NoSQL et déployer une application complète sur un VPS.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Competences;
