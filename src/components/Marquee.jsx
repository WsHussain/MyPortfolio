const Marquee = ({ items, reverse = false }) => {
    return (
        <div className="relative flex overflow-x-hidden py-6 border-y border-white/10 bg-dark/50 backdrop-blur-sm">
            <div className={`flex whitespace-nowrap ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}>
                {[...items, ...items, ...items, ...items].map((item, i) => (
                    <span
                        key={i}
                        className="mx-8 text-4xl font-display font-bold text-white/20 uppercase tracking-tighter hover:text-white transition-colors duration-300"
                    >
                        {item} <span className="text-accent">✦</span>
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Marquee;
