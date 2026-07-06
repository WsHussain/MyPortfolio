import RevealText from "./RevealText";
import { ArrowDown } from "./Icons";

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex flex-col justify-center px-6 pt-20 relative overflow-hidden">
            <div className="max-w-[90vw]">
                <RevealText delay={0.1}>
                    <h1 className="text-[10vw] leading-[0.85] font-display font-bold uppercase tracking-tighter text-white">
                        Full Stack
                    </h1>
                </RevealText>
                <RevealText delay={0.2}>
                    <p className="text-[10vw] leading-[0.85] font-display font-bold uppercase tracking-tighter text-white/50 ml-[10vw]">
                        Developer
                    </p>
                </RevealText>

                <div className="mt-12 flex flex-col md:flex-row justify-between items-start md:items-end border-t border-white/20 pt-6">
                    <RevealText delay={0.4}>
                        <p className="max-w-md text-white/60 text-lg font-light leading-relaxed">
                            Je crée des expériences numériques immersives et des solutions techniques robustes. Basé en France, disponible mondialement.
                        </p>
                    </RevealText>
                    <RevealText delay={0.6}>
                        <div className="mt-8 md:mt-0">
                            <div className="animate-bounce">
                                <ArrowDown className="w-6 h-6 text-white/40" />
                            </div>
                        </div>
                    </RevealText>
                </div>
            </div>
        </section>
    );
};

export default Hero;
