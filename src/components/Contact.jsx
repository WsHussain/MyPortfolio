import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Close, Envelope } from "./Icons";

const CONTACT_EMAIL = "Azaglobalservice@gmail.com";

const Contact = ({ isOpen, onClose }) => {
    const form = useRef();
    const [status, setStatus] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus("sending");

        emailjs
            .sendForm("service_tyqzgnj", "template_23k06kx", form.current, {
                publicKey: "bcUUT6BS4DzbMiNaK",
            })
            .then(
                () => {
                    setStatus("success");
                    setTimeout(() => {
                        setStatus("");
                        onClose();
                    }, 2000);
                },
                (error) => {
                    console.error(error);
                    setStatus("error");
                }
            );
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-dark/95 backdrop-blur-xl z-50 flex items-center justify-center p-6 animate-fade-in-up overflow-y-auto">
            <button onClick={onClose} className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors" aria-label="Fermer">
                <Close />
            </button>

            <div className="w-full max-w-2xl">
                <h2 className="text-5xl font-display font-bold text-white mb-2">Let's talk.</h2>
                <p className="text-white/50 mb-2">Remplissez le formulaire ci-dessous ou écrivez-moi directement :</p>
                <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-10"
                >
                    <Envelope className="w-4 h-4" />
                    <span className="underline underline-offset-4 decoration-white/30">{CONTACT_EMAIL}</span>
                </a>

                {status === "success" ? (
                    <div className="text-center py-20">
                        <span className="text-6xl mb-4 block">✨</span>
                        <h3 className="text-2xl text-white font-display">Message reçu.</h3>
                    </div>
                ) : (
                    <form ref={form} onSubmit={sendEmail} className="space-y-8">
                        <div className="group">
                            <label htmlFor="contact-name" className="block text-xs uppercase tracking-widest text-white/40 mb-2">Votre Nom</label>
                            <input id="contact-name" type="text" name="user_name" required
                                   className="w-full bg-transparent border-b border-white/20 py-4 text-white text-xl focus:outline-none focus:border-white transition-colors rounded-none"
                                   placeholder="John Doe" />
                        </div>
                        <div className="group">
                            <label htmlFor="contact-email" className="block text-xs uppercase tracking-widest text-white/40 mb-2">Votre Email</label>
                            <input id="contact-email" type="email" name="user_email" required
                                   className="w-full bg-transparent border-b border-white/20 py-4 text-white text-xl focus:outline-none focus:border-white transition-colors rounded-none"
                                   placeholder="john@example.com" />
                        </div>
                        <div className="group">
                            <label htmlFor="contact-message" className="block text-xs uppercase tracking-widest text-white/40 mb-2">Message</label>
                            <textarea id="contact-message" name="message" rows="3" required
                                      className="w-full bg-transparent border-b border-white/20 py-4 text-white text-xl focus:outline-none focus:border-white transition-colors rounded-none resize-none"
                                      placeholder="Parlez-moi de votre projet..."></textarea>
                        </div>

                        {status === "error" && (
                            <p className="text-red-400 text-sm">
                                L'envoi a échoué. Réessayez ou écrivez-moi directement à {CONTACT_EMAIL}.
                            </p>
                        )}

                        <button type="submit" className="mt-8 bg-white text-dark px-10 py-5 font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors w-full md:w-auto">
                            {status === "sending" ? "Envoi..." : "Envoyer le message"}
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default Contact;
