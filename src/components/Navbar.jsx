import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Burger, Close } from "./Icons";

const links = [
    { label: "Projets", to: "/#projects" },
    { label: "Compétences", to: "/competences" },
    { label: "À Propos", to: "/#about" },
];

const Navbar = ({ onContact }) => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const go = (to) => {
        setOpen(false);
        navigate(to);
    };

    return (
        <>
            <nav className="fixed top-0 w-full p-6 flex justify-between items-center z-40 mix-blend-difference text-white">
                <button
                    onClick={() => go("/")}
                    className="text-xl font-bold font-display tracking-widest cursor-pointer"
                >
                    WAQAS.HU
                </button>

                {/* Desktop */}
                <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest">
                    {links.map((l) => (
                        <button key={l.label} onClick={() => go(l.to)} className="hover:line-through decoration-accent decoration-2">
                            {l.label}
                        </button>
                    ))}
                    <button onClick={onContact} className="hover:line-through decoration-accent decoration-2">
                        Contact
                    </button>
                </div>

                {/* Mobile burger */}
                <button
                    className="md:hidden"
                    onClick={() => setOpen(true)}
                    aria-label="Ouvrir le menu"
                >
                    <Burger />
                </button>
            </nav>

            {/* Mobile menu overlay */}
            {open && (
                <div className="fixed inset-0 bg-dark z-[45] flex flex-col items-center justify-center gap-10 md:hidden">
                    <button
                        onClick={() => setOpen(false)}
                        className="absolute top-6 right-6 text-white/50 hover:text-white"
                        aria-label="Fermer le menu"
                    >
                        <Close />
                    </button>
                    {links.map((l) => (
                        <button
                            key={l.label}
                            onClick={() => go(l.to)}
                            className="text-3xl font-display font-bold uppercase tracking-tight text-white"
                        >
                            {l.label}
                        </button>
                    ))}
                    <button
                        onClick={() => {
                            setOpen(false);
                            onContact();
                        }}
                        className="text-3xl font-display font-bold uppercase tracking-tight text-accent"
                    >
                        Contact
                    </button>
                </div>
            )}
        </>
    );
};

export default Navbar;
