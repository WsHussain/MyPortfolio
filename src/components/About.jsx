import { Link } from "react-router-dom";
import { ArrowDown, ArrowUpRight, LinkedIn } from "./Icons";

const About = () => {
    return (
        <section id="about" className="py-32 bg-white text-dark px-6">
            <div className="container mx-auto">
                <div className="mb-16 border-b border-dark/20 pb-4">
                    <span className="text-sm uppercase tracking-widest text-dark/50">02 / À Propos</span>
                </div>

                <div className="grid md:grid-cols-2 gap-16 items-center">
                    {/* Colonne GAUCHE : Image */}
                    <div className="relative group w-full max-w-md mx-auto md:mx-0">
                        <div className="aspect-[3/4] overflow-hidden rounded-2xl transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] shadow-2xl shadow-dark/5">
                            <img
                                src="/Profile.jpg"
                                alt="Waqas Hussain, développeur web full stack"
                                className="w-full h-full object-cover grayscale brightness-95
                                           transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]
                                           group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-2xl pointer-events-none"></div>
                        </div>
                    </div>

                    {/* Colonne DROITE : Texte */}
                    <div>
                        <h3 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
                            Au-delà du code, <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-dark to-dark/60">
                                je crée des solutions.
                            </span>
                        </h3>
                        <div className="space-y-6 text-lg text-dark/70 font-light leading-relaxed">
                            <p>
                                Après avoir exploré le design UX/UI, la photographie et la gestion, je combine aujourd'hui créativité visuelle et rigueur technique.
                            </p>
                            <p>
                                Je ne me contente pas de coder des fonctionnalités. Je conçois des systèmes entiers pensés pour l'utilisateur final. Ma polyvalence me permet de comprendre les enjeux design tout en maîtrisant les contraintes backend.
                            </p>
                        </div>

                        <div className="mt-12 flex flex-wrap items-center gap-6">
                            <a
                                href="/Waqas_Hussain_CV.pdf"
                                target="_blank"
                                rel="noreferrer"
                                className="group inline-flex items-center gap-3 px-8 py-4 bg-dark text-white rounded-full transition-all hover:bg-dark/90 hover:scale-105"
                            >
                                <span className="uppercase tracking-widest text-sm font-bold">Télécharger CV</span>
                                <ArrowDown className="w-4 h-4 transform group-hover:translate-y-1 transition-transform" />
                            </a>

                            <Link
                                to="/competences"
                                className="group inline-flex items-center gap-2 uppercase tracking-widest text-sm font-bold text-dark/60 hover:text-dark transition-colors"
                            >
                                Mes compétences RNCP
                                <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </Link>

                            <a
                                href="https://www.linkedin.com/in/waqas-hu/"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="LinkedIn"
                                className="text-dark/40 hover:text-dark transition-colors"
                            >
                                <LinkedIn />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
