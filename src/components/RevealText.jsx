const RevealText = ({ children, delay = 0 }) => {
    return (
        <div className="overflow-hidden">
            <div className="animate-fade-in-up" style={{ animationDelay: `${delay}s`, opacity: 0 }}>
                {children}
            </div>
        </div>
    );
};

export default RevealText;
