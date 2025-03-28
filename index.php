<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Waqas Hussain - Developpeur Web</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
    <script>
        (function() {
            emailjs.init("bcUUT6BS4DzbMiNaK");
        })();
    </script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    keyframes: {
                        float: {
                            '0%': { transform: 'translateY(0px)' },
                            '50%': { transform: 'translateY(-20px)' },
                            '100%': { transform: 'translateY(0px)' }
                        },
                        moveLeft: {
                            '0%': { transform: 'translateX(0px)' },
                            '50%': { transform: 'translateX(-20px)' },
                            '100%': { transform: 'translateX(0px)' }
                        },
                        popIn: {
                            '0%': { transform: 'scale(0.9)', opacity: 0 },
                            '100%': { transform: 'scale(1)', opacity: 1 }
                        },
                        slideIn: {
                            '0%': { 
                                transform: 'translateX(100%)',
                                opacity: '0'
                            },
                            '100%': { 
                                transform: 'translateX(0)',
                                opacity: '1'
                            }
                        },
                        slideOut: {
                            '0%': { 
                                transform: 'translateX(0)',
                                opacity: '1'
                            },
                            '100%': { 
                                transform: 'translateX(-100%)',
                                opacity: '0'
                            }
                        },
                        fadeIn: {
                            '0%': { opacity: '0' },
                            '100%': { opacity: '1' }
                        },
                        slideCarousel: {
                            '0%': { transform: 'translateX(0%)' },
                            '100%': { transform: 'translateX(-100%)' }
                        },
                        success: {
                            '0%': { transform: 'scale(0.8)', opacity: 0 },
                            '50%': { transform: 'scale(1.1)' },
                            '100%': { transform: 'scale(1)', opacity: 1 }
                        },
                        fadeSlideIn: {
                            '0%': { 
                                transform: 'translateX(50px)',
                                opacity: '0'
                            },
                            '100%': { 
                                transform: 'translateX(0)',
                                opacity: '1'
                            }
                        },
                        fadeSlideOut: {
                            '0%': { 
                                transform: 'translateX(0)',
                                opacity: '1'
                            },
                            '100%': { 
                                transform: 'translateX(-50px)',
                                opacity: '0'
                            }
                        }
                    },
                    animation: {
                        'float': 'float 2s ease-in-out infinite',
                        'float-slow': 'float 4s ease-in-out infinite',
                        'float-slower': 'float 6s ease-in-out infinite',
                        'move-left': 'moveLeft 10s ease-in-out infinite',
                        'popIn': 'popIn 0.3s ease-out',
                        'slideIn': 'slideIn 0.6s ease-out',
                        'slideOut': 'slideOut 0.6s ease-out',
                        'fadeIn': 'fadeIn 0.6s ease-out',
                        'slide-carousel': 'slideCarousel 20s linear infinite',
                        'success': 'success 0.5s ease-out',
                        'fadeSlideIn': 'fadeSlideIn 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                        'fadeSlideOut': 'fadeSlideOut 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
                    },
                    backgroundImage: {
                        'gradient-custom': 'linear-gradient(315deg, #E3B7A0 0%, #BF9270 74%)',
                        'gradient-hover': 'linear-gradient(315deg, #EDCDBB 0%, #E3B7A0 74%)',
                    },
                    boxShadow: {
                        'custom': 'inset 2px 2px 2px 0px rgba(255,255,255,.5), 7px 7px 20px 0px rgba(0,0,0,.1), 4px 4px 5px 0px rgba(0,0,0,.1)',
                    },
                    colors: {
                        primary: '#BF9270',
                        secondary: '#E3B7A0',
                        accent: '#EDCDBB',
                        background: '#FFEDDB',
                    }
                }
            }
        }
    </script>
    <style>
        @tailwind base;
        @tailwind components;
        @tailwind utilities;

        .cloud-shadow {
            filter: drop-shadow(0 10px 15px rgba(255, 255, 255, 0.1));
        }
    </style>
</head>
<body>
    <div id="root"></div>
    
    <script type="text/babel">
        const ContactModal = ({ isOpen, onClose }) => {
            const form = React.useRef();
            const [isEmailSent, setIsEmailSent] = React.useState(false);

            const sendEmail = (e) => {
                e.preventDefault();
                
                emailjs.sendForm(
                    'service_tyqzgnj', 
                    'template_23k06kx', 
                    form.current, 
                    'bcUUT6BS4DzbMiNaK'
                )
                .then((result) => {
                    setIsEmailSent(true);
                    // Ferme la modal après 2 secondes
                    setTimeout(() => {
                        setIsEmailSent(false);
                        onClose();
                    }, 2000);
                }, (error) => {
                    console.log('Erreur:', error.text);
                });
            };

            if (!isOpen) return null;

            return (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
                    <div className="bg-background rounded-xl p-8 max-w-lg w-full m-4 relative animate-[popIn_0.3s_ease-out]">
                        {isEmailSent ? (
                            <div className="absolute inset-0 bg-background rounded-xl flex items-center justify-center animate-[popIn_0.3s_ease-out]">
                                <div className="text-center">
                                    <div className="text-6xl mb-4">✨</div>
                                    <h3 className="text-2xl font-bold text-primary mb-2">
                                        Message envoyé !
                                    </h3>
                                    <p className="text-primary/70">
                                        Je vous répondrai dans les plus brefs délais
                                    </p>
                                </div>
                            </div>
                        ) : (
                            <>
                                <button 
                                    onClick={onClose}
                                    className="absolute right-4 top-4 text-primary hover:text-secondary transition-colors"
                                >
                                    <i className="fas fa-times text-xl"></i>
                                </button>
                                
                                <h2 className="text-2xl font-bold text-primary mb-6">
                                    Contactez-moi
                                </h2>
                                
                                <form ref={form} onSubmit={sendEmail} className="space-y-4">
                                    <div className="flex gap-4">
                                        <div className="flex-1">
                                            <label htmlFor="user_name" className="block text-primary mb-2">
                                                Nom complet
                                            </label>
                                            <input
                                                type="text"
                                                id="user_name"
                                                name="user_name"
                                                className="w-full rounded-lg border-2 border-primary/20 bg-white/50 p-3 
                                                         text-primary placeholder-primary/50 focus:border-primary 
                                                         focus:outline-none focus:ring-2 focus:ring-primary/20"
                                                placeholder="Votre nom"
                                                required
                                            />
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <label htmlFor="user_email" className="block text-primary mb-2">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="user_email"
                                            name="user_email"
                                            className="w-full rounded-lg border-2 border-primary/20 bg-white/50 p-3 
                                                     text-primary placeholder-primary/50 focus:border-primary 
                                                     focus:outline-none focus:ring-2 focus:ring-primary/20"
                                            placeholder="votre@email.com"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-primary mb-2">
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows="4"
                                            className="w-full rounded-lg border-2 border-primary/20 bg-white/50 p-3 
                                                     text-primary placeholder-primary/50 focus:border-primary 
                                                     focus:outline-none focus:ring-2 focus:ring-primary/20"
                                            placeholder="Comment puis-je vous aider ?"
                                            required
                                        ></textarea>
                                    </div>
                                    
                                    <button 
                                        type="submit"
                                        className="w-full bg-gradient-custom hover:bg-gradient-hover text-white 
                                                 rounded-lg py-3 font-bold transition-all duration-300 
                                                 hover:text-primary shadow-custom"
                                    >
                                        Envoyer <i className="fas fa-paper-plane ml-2"></i>
                                    </button>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            );
        };

        const ProjectModal = ({ isOpen, onClose, project }) => {
            if (!isOpen || !project) return null;

            return (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
                    <div className="bg-background rounded-xl p-8 max-w-4xl w-full m-4 relative animate-[popIn_0.3s_ease-out]">
                        <button 
                            onClick={onClose}
                            className="absolute right-4 top-4 text-primary hover:text-secondary transition-colors"
                        >
                            <i className="fas fa-times text-xl"></i>
                        </button>
                        
                        <div className="space-y-6">
                            <img 
                                src={project.image} 
                                alt={project.title}
                                className="w-full h-[400px] object-cover object-top rounded-lg"
                            />
                            
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <h2 className="text-2xl font-bold text-primary">
                                        {project.title}
                                    </h2>
                                    <span className="px-4 py-2 bg-accent rounded-full text-primary text-sm">
                                        {project.category}
                                    </span>
                                </div>
                                
                                <p className="text-primary/80 text-lg">
                                    {project.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            );
        };

        const CloudBackground = () => {
            return (
                <div className="fixed inset-0 pt-[4rem] overflow-hidden">
                    <div className="absolute w-[120%] h-[120%] -left-[10%] top-0">
                        <div className="relative w-full h-full">
                            {/* Grands nuages avec opacité augmentée */}
                            <div className="absolute top-[20%] left-[10%] w-[300px] h-[100px] bg-primary/25 rounded-[100px] animate-float" />
                            <div className="absolute top-[40%] right-[20%] w-[250px] h-[80px] bg-secondary/30 rounded-[80px] animate-float-slow" />
                            <div className="absolute top-[80%] left-[5%] w-[280px] h-[90px] bg-accent/25 rounded-[90px] animate-float" />
                            <div className="absolute top-[5%] right-[15%] w-[320px] h-[95px] bg-primary/25 rounded-[95px] animate-float-slower" />
                            
                            {/* Nuages moyens supplémentaires */}
                            <div className="absolute top-[45%] left-[50%] w-[200px] h-[70px] bg-secondary/30 rounded-[70px] animate-float" />
                            <div className="absolute top-[75%] right-[15%] w-[220px] h-[75px] bg-accent/30 rounded-[75px] animate-float-slow" />
                            <div className="absolute top-[30%] left-[35%] w-[180px] h-[65px] bg-primary/25 rounded-[65px] animate-float-slower" />
                            <div className="absolute top-[60%] right-[40%] w-[190px] h-[68px] bg-secondary/35 rounded-[68px] animate-float" />
                            <div className="absolute top-[15%] left-[60%] w-[210px] h-[72px] bg-accent/25 rounded-[72px] animate-float-slow" />
                            
                            {/* Nuages supplémentaires */}
                            <div className="absolute top-[8%] left-[25%] w-[280px] h-[85px] bg-accent/20 rounded-[85px] animate-float-slow" />
                            <div className="absolute top-[65%] right-[30%] w-[260px] h-[82px] bg-primary/25 rounded-[82px] animate-move-left" />
                            <div className="absolute top-[40%] left-[8%] w-[240px] h-[78px] bg-secondary/30 rounded-[78px] animate-float" />
                            
                            {/* Nouveaux grands nuages */}
                            <div className="absolute top-[95%] left-[70%] w-[340px] h-[110px] bg-primary/25 rounded-[110px] animate-float-slower" />
                            <div className="absolute top-[2%] left-[85%] w-[300px] h-[95px] bg-secondary/30 rounded-[95px] animate-float" />
                            <div className="absolute top-[50%] left-[75%] w-[320px] h-[100px] bg-accent/25 rounded-[100px] animate-float-slow" />
                            
                            {/* Nouveaux nuages moyens */}
                            <div className="absolute top-[25%] right-[55%] w-[230px] h-[75px] bg-primary/30 rounded-[75px] animate-float-slower" />
                            <div className="absolute top-[70%] right-[65%] w-[210px] h-[70px] bg-secondary/25 rounded-[70px] animate-float" />
                            <div className="absolute top-[88%] right-[25%] w-[240px] h-[80px] bg-accent/30 rounded-[80px] animate-float-slow" />
                            
                            {/* Petits nuages avec opacité augmentée */}
                            <div className="absolute top-[60%] left-[30%] w-[150px] h-[50px] bg-primary/20 rounded-[50px] animate-float-slower" />
                            <div className="absolute top-[15%] right-[35%] w-[180px] h-[60px] bg-secondary/25 rounded-[60px] animate-move-left" />
                            <div className="absolute top-[85%] right-[45%] w-[140px] h-[45px] bg-accent/30 rounded-[45px] animate-float-slow" />
                            <div className="absolute top-[35%] right-[5%] w-[160px] h-[55px] bg-primary/25 rounded-[55px] animate-float" />
                            
                            {/* Nouveaux petits nuages */}
                            <div className="absolute top-[82%] left-[38%] w-[130px] h-[45px] bg-secondary/25 rounded-[45px] animate-float-slow" />
                            <div className="absolute top-[12%] right-[48%] w-[145px] h-[48px] bg-accent/30 rounded-[48px] animate-float" />
                            <div className="absolute top-[55%] left-[88%] w-[135px] h-[46px] bg-primary/25 rounded-[46px] animate-float-slower" />
                        </div>
                    </div>
                </div>
            );
        };

        const PortfolioItem = ({ image, category, title, description, onClick }) => {
            return (
                <div className="w-[350px] overflow-hidden rounded-xl border border-accent/20 bg-background/5 backdrop-blur-sm 
                                transition-all duration-300 hover:shadow-xl hover:scale-105">
                    <div className="relative overflow-hidden group">
                        <div className="absolute left-5 top-4 z-10 rounded-full bg-accent px-4 py-2 text-xs uppercase 
                                       text-primary transition-all duration-600">
                            {category}
                        </div>
                        <div className="absolute inset-0 bg-primary/50 opacity-0 group-hover:opacity-100 
                                       transition-opacity duration-300 flex items-center justify-center">
                            <button 
                                onClick={onClick}
                                className="bg-white/90 text-primary px-6 py-3 rounded-lg transform -translate-y-4 
                                         opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
                            >
                                Voir le projet
                            </button>
                        </div>
                        <img 
                            src={image} 
                            alt={title}
                            className="aspect-video w-full object-cover object-center transition-transform 
                                     duration-600 group-hover:scale-110"
                        />
                    </div>
                    <div className="p-5 bg-background/80">
                        <h3 className="mb-3 text-xl font-bold">
                            <span className="text-primary transition-all duration-300">
                                {title}
                            </span>
                        </h3>
                        <p className="mb-4 text-sm text-primary/70">
                            {description}
                        </p>
                    </div>
                </div>
            );
        };

        const PortfolioGallery = () => {
            const [currentSlide, setCurrentSlide] = React.useState(0);
            const [selectedProject, setSelectedProject] = React.useState(null);

            const portfolioItems = [
                {
                    image: "./Projet_img/Keshi_website.PNG",
                    category: "Web Design",
                    title: "Keshi Website",
                    description: "Site vitrine pour l'artiste Keshi"
                },
                {
                    image: "./Projet_img/My_cinema.PNG",
                    category: "Application Web",
                    title: "My Cinema",
                    description: "Application de gestion de cinéma"
                },
                {
                    image: "./Projet_img/Puissance_4.PNG",
                    category: "Jeu",
                    title: "Puissance 4",
                    description: "Jeu de stratégie classique"
                },
                {
                    image: "./Projet_img/Interface SQL.PNG",
                    category: "Base de données",
                    title: "Interface SQL",
                    description: "Interface de gestion de base de données"
                },
                {
                    image: "./Projet_img/Todolist_1.PNG",
                    category: "Application Web",
                    title: "TodoList",
                    description: "Application de gestion de tâches - Vue 1"
                },
                {
                    image: "./Projet_img/Todolist_2.PNG",
                    category: "Application Web",
                    title: "TodoList V2",
                    description: "Application de gestion de tâches - Vue 2"
                },
                {
                    image: "./Projet_img/Maquette site.PNG",
                    category: "Design",
                    title: "Maquette Site",
                    description: "Prototype de design web"
                },
                {
                    image: "./Projet_img/twitter.png",
                    category: "Application Web",
                    title: "Clone Twitter",
                    description: "Clone de Twitter avec fonctionnalités de base"
                }
            ];

            // Create a duplicate of the array to create an infinite loop effect
            const infinitePortfolioItems = [...portfolioItems, ...portfolioItems];

            React.useEffect(() => {
                const timer = setInterval(() => {
                    setCurrentSlide((prev) => (prev + 1) % portfolioItems.length);
                }, 3000); // Change slide every 3 seconds

                return () => clearInterval(timer);
            }, []);

            return (
                <section id="portfolio" className="min-h-screen bg-gradient-to-br from-secondary to-primary py-20 pt-32">
                    <div className="container mx-auto px-5">
                        <h2 className="mb-16 text-center text-4xl font-bold text-background">
                            Mes Projets
                        </h2>
                        
                        <div className="overflow-hidden w-full">
                            <div 
                                className="flex transition-transform duration-1000 ease-in-out"
                                style={{ 
                                    transform: `translateX(-${(currentSlide * 100) / portfolioItems.length}%)`,
                                    width: `${(infinitePortfolioItems.length * 100) / portfolioItems.length}%`
                                }}
                            >
                                {infinitePortfolioItems.map((item, index) => (
                                    <div 
                                        key={index} 
                                        className="flex-shrink-0"
                                        style={{ width: `${100 / portfolioItems.length}%` }}
                                    >
                                        <div className="flex justify-center">
                                            <PortfolioItem 
                                                {...item} 
                                                onClick={() => setSelectedProject(item)}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    
                    <ProjectModal 
                        isOpen={selectedProject !== null}
                        onClose={() => setSelectedProject(null)}
                        project={selectedProject}
                    />
                </section>
            );
        };

        const AboutSection = () => {
            return (
                <section id="about" className="min-h-screen bg-background py-20">
                    <div className="container mx-auto px-5">
                        <h2 className="mb-16 text-center text-4xl font-bold text-primary">
                            À Propos de Moi
                        </h2>
                        
                        <div className="max-w-4xl mx-auto bg-primary/5 backdrop-blur-sm rounded-xl p-8 shadow-lg">
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div className="space-y-6">
                                    <p className="text-primary/80">
                                        J'ai exploré diverses passions, de l'UX/UI au développement web, en passant par la mode, la photographie et le mannequinat. Chaque expérience m'a enrichi tant personnellement que professionnellement.
                                    </p>
                                    <p className="text-primary/80">
                                        Du management de projet à la conception web, de la photographie au mannequinat, cette polyvalence définit mon parcours. Ma soif d'apprentissage et ma curiosité me poussent constamment à relever de nouveaux défis.
                                    </p>
                                    <div className="pt-4">
                                        <h3 className="text-xl font-bold text-primary mb-4">Mes Compétences</h3>
                                        <div className="flex flex-wrap gap-3">
                                            {["HTML", "CSS", "JavaScript", "React", "Node.js", "PHP", "MySQL", "Git"].map((skill) => (
                                                <span 
                                                    key={skill}
                                                    className="px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="relative">
                                    <div className="aspect-square rounded-full bg-gradient-custom p-1">
                                        <div className="w-full h-full rounded-full overflow-hidden">
                                            <img 
                                                src="./Profile.jpg" 
                                                alt="Photo de profil"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>
                                    <div className="absolute -bottom-4 -right-4 bg-background rounded-xl p-4 shadow-lg">
                                        <div className="text-primary font-bold text-xl">1+</div>
                                        <div className="text-primary/70 text-sm">années d'expérience</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            );
        };

        const Header = ({ currentSection, onNavigate, onContactClick }) => {
            return (
                <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md py-4 px-5">
                    <div className="container mx-auto flex items-center justify-between">
                        <div className="flex items-center gap-12">
                            <div className="text-3xl font-bold text-primary">WH</div>
                            <nav className="flex items-center gap-6">
                                <button 
                                    onClick={() => onNavigate('hero')}
                                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300
                                        ${currentSection === 'hero' 
                                            ? 'bg-primary/10 text-primary' 
                                            : 'text-primary/60 hover:text-primary hover:bg-primary/5'}`}
                                >
                                    Accueil
                                </button>
                                <button 
                                    onClick={() => onNavigate('portfolio')}
                                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300
                                        ${currentSection === 'portfolio' 
                                            ? 'bg-primary/10 text-primary' 
                                            : 'text-primary/60 hover:text-primary hover:bg-primary/5'}`}
                                >
                                    Portfolio
                                </button>
                                <button 
                                    onClick={() => onNavigate('about')}
                                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300
                                        ${currentSection === 'about' 
                                            ? 'bg-primary/10 text-primary' 
                                            : 'text-primary/60 hover:text-primary hover:bg-primary/5'}`}
                                >
                                    À propos
                                </button>
                            </nav>
                        </div>
                        
                        <div className="flex items-center gap-6">
                            <button 
                                onClick={onContactClick}
                                className="px-6 py-2 bg-gradient-custom hover:bg-gradient-hover text-white 
                                         rounded-lg font-medium transition-all duration-300 shadow-custom
                                         hover:text-primary"
                            >
                                Contact
                            </button>
                            <div className="flex items-center gap-4">
                                <a 
                                    href="https://github.com/WsHussain" 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary/70 hover:text-primary transition-colors"
                                >
                                    <i className="fab fa-github text-xl"></i>
                                </a>
                                <a 
                                    href="https://www.linkedin.com/in/waqas-hu/" 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary/70 hover:text-primary transition-colors"
                                >
                                    <i className="fab fa-linkedin text-xl"></i>
                                </a>
                                <a 
                                    href="https://www.instagram.com/waqas.hu/" 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary/70 hover:text-primary transition-colors font-medium"
                                >
                                    @waqas.hu
                                </a>
                            </div>
                        </div>
                    </div>
                </header>
            );
        };

        const Portfolio = () => {
            const [currentSection, setCurrentSection] = React.useState('hero');
            const [isContactOpen, setIsContactOpen] = React.useState(false);
            const [direction, setDirection] = React.useState('next');

            const navigateToSection = (section) => {
                setDirection(section === 'hero' ? 'prev' : 'next');
                setCurrentSection(section);
            };

            return (
                <div className="flex flex-col min-h-screen bg-background">
                    <Header 
                        currentSection={currentSection}
                        onNavigate={navigateToSection}
                        onContactClick={() => setIsContactOpen(true)}
                    />
                    
                    <div className="flex-1 relative overflow-hidden">
                        {/* Hero Section */}
                        <div 
                            className={`absolute inset-0 transition-opacity duration-800 ease-in-out
                                ${currentSection === 'hero' 
                                    ? 'opacity-100 animate-fadeSlideIn' 
                                    : 'opacity-0 animate-fadeSlideOut'}`}
                            style={{
                                pointerEvents: currentSection === 'hero' ? 'auto' : 'none'
                            }}
                        >
                            <div className="min-h-screen pt-20 text-white relative">
                                <CloudBackground />
                                <div className="relative z-10 container mx-auto h-full flex flex-col items-center justify-center px-5">
                                    <div className="max-w-3xl w-full flex flex-col items-center">
                                        <p className="text-lg mb-5 font-medium bg-primary/5 px-6 py-3 rounded-full backdrop-blur-sm text-primary">
                                             Hello! I am Waqas, celui qui révolutionnera votre vision du web. 
                                        </p>

                                        <h1 className="text-5xl font-bold mb-12 text-primary drop-shadow-lg text-center">
                                            Developpeur<br />Full Stack
                                        </h1>

                                        <p className="text-lg mb-8 text-primary/90 bg-primary/5 p-6 rounded-xl backdrop-blur-sm shadow-lg text-center max-w-2xl">
                                            Dans le domaine du développement web depuis plus d'un an, je suis en quête de devenir votre meilleur atout et de constamment 
                                            de repousser mes limites et d'explorer de nouvelles technologies. Mon GOAL ? 
                                            Créer des expériences web qui domineront le monde et pas seulement.
                                        </p>

                                        <a 
                                            href="./Waqas_Hussain_CV.pdf" 
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="relative overflow-hidden bg-gradient-custom text-white px-6 py-3 rounded-lg font-bold 
                                                      shadow-custom z-10 transition-all duration-300 transform
                                                      hover:text-primary active:translate-y-0.5"
                                        >
                                            Télécharger mon CV <i className="fas fa-download ml-2"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Portfolio Section */}
                        <div 
                            className={`absolute inset-0 transition-opacity duration-800 ease-in-out
                                ${currentSection === 'portfolio' 
                                    ? 'opacity-100 animate-fadeSlideIn' 
                                    : 'opacity-0 animate-fadeSlideOut'}`}
                            style={{
                                pointerEvents: currentSection === 'portfolio' ? 'auto' : 'none'
                            }}
                        >
                            <PortfolioGallery />
                        </div>

                        {/* About Section */}
                        <div 
                            className={`absolute inset-0 transition-opacity duration-800 ease-in-out
                                ${currentSection === 'about' 
                                    ? 'opacity-100 animate-fadeSlideIn' 
                                    : 'opacity-0 animate-fadeSlideOut'}`}
                            style={{
                                pointerEvents: currentSection === 'about' ? 'auto' : 'none'
                            }}
                        >
                            <AboutSection />
                        </div>
                    </div>

                    <ContactModal 
                        isOpen={isContactOpen} 
                        onClose={() => setIsContactOpen(false)} 
                    />
                </div>
            );
        };

        ReactDOM.render(<Portfolio />, document.getElementById('root'));
    </script>
</body>
</html>