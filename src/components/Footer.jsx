import { GitHub, LinkedIn, Instagram, Envelope } from "./Icons";

const CONTACT_EMAIL = "Azaglobalservice@gmail.com";

const Footer = ({ onContact }) => {
    return (
        <footer className="py-20 px-6 border-t border-white/10 text-center">
            <button
                onClick={onContact}
                className="text-[12vw] font-display font-bold text-white/10 uppercase leading-none hover:text-white/20 transition-colors cursor-pointer"
            >
                Contact Me
            </button>
            <div className="flex justify-center gap-8 mt-12">
                <a href="https://github.com/WsHussain" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-white/40 hover:text-white transition-colors">
                    <GitHub />
                </a>
                <a href="https://www.linkedin.com/in/waqas-hu/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-white/40 hover:text-white transition-colors">
                    <LinkedIn />
                </a>
                <a href="https://www.instagram.com/waqas.hu/" target="_blank" rel="noreferrer" aria-label="Instagram" className="text-white/40 hover:text-white transition-colors">
                    <Instagram />
                </a>
                <a href={`mailto:${CONTACT_EMAIL}`} aria-label="Email" className="text-white/40 hover:text-white transition-colors">
                    <Envelope className="w-6 h-6" />
                </a>
            </div>
            <p className="mt-6 text-white/30 text-sm">{CONTACT_EMAIL} — France</p>
            <p className="mt-4 text-white/20 text-xs uppercase tracking-widest">© 2026 Waqas Hussain. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
