"use client";

import { useState } from "react";
import { X, Loader2, CheckCircle, AlertTriangle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface PartnerFormProps {
  isOpen: boolean;
  onClose: () => void;
}

type FormStatus = "idle" | "loading" | "success" | "error";

export default function PartnerForm({ isOpen, onClose }: PartnerFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [portfolioLink, setPortfolioLink] = useState("");
  const [partnerType, setPartnerType] = useState("freelancer");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [formError, setFormError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    if (!consent) {
      setFormError("Você precisa concordar com os termos para continuar.");
      return;
    }
    if (!name || !email || !portfolioLink) {
      setFormError("Por favor, preencha os campos obrigatórios.");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/submit-partner-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, portfolioLink, partnerType, message }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Ocorreu um erro ao enviar.");
      }

      setStatus("success");
    } catch (error: any) {
      setStatus("error");
      setFormError(error.message);
    }
  };
  
  const handleClose = () => {
    setTimeout(() => {
        setName("");
        setEmail("");
        setPortfolioLink("");
        setPartnerType("freelancer");
        setMessage("");
        setConsent(false);
        setFormError(null);
        setStatus("idle");
    }, 300);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-center p-4 overflow-y-auto"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 50 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl w-full max-w-md p-6 sm:p-8 relative my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {status === "success" ? (
               <div className="text-center py-10">
                 <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                 <h2 className="text-2xl font-bold text-white mb-2">Proposta de Parceria Enviada!</h2>
                 <p className="text-gray-300">Analisaremos sua proposta e entraremos em contato em breve. Obrigado!</p>
                 <button onClick={handleClose} className="mt-6 px-6 py-2 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700">Fechar</button>
               </div>
            ) : (
              <>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  Seja um Parceiro Conectha
                </h2>
                <p className="text-gray-400 mb-6">
                  Estamos sempre em busca de talentos. Preencha o formulário abaixo.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name-partner" className="block text-sm font-medium text-gray-300 mb-1">
                      Seu Nome <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text" id="name-partner" value={name} onChange={(e) => setName(e.target.value)} required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
                    />
                  </div>
                  <div>
                    <label htmlFor="email-partner" className="block text-sm font-medium text-gray-300 mb-1">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email" id="email-partner" value={email} onChange={(e) => setEmail(e.target.value)} required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
                    />
                  </div>
                  <div>
                    <label htmlFor="partnerType" className="block text-sm font-medium text-gray-300 mb-1">
                        Você é? <span className="text-red-500">*</span>
                    </label>
                    <select id="partnerType" value={partnerType} onChange={(e) => setPartnerType(e.target.value)} className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition">
                        <option value="freelancer">Freelancer</option>
                        <option value="influencer">Influenciador Digital</option>
                        <option value="agency">Agência</option>
                        <option value="other">Outro</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="portfolio-partner" className="block text-sm font-medium text-gray-300 mb-1">
                      Link do Portfólio ou Rede Social <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text" id="portfolio-partner" value={portfolioLink} onChange={(e) => setPortfolioLink(e.target.value)} required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
                    />
                  </div>
                  <div>
                    <label htmlFor="message-partner" className="block text-sm font-medium text-gray-300 mb-1">
                      Sua Mensagem
                    </label>
                    <textarea
                      id="message-partner" rows={3} value={message} onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
                      placeholder="Fale sobre você e por que gostaria de ser um parceiro..."
                    ></textarea>
                  </div>
                  
                  <div className="flex items-start">
                      <input id="consent-partner" name="consent" type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} className="h-4 w-4 text-purple-600 border-gray-500 rounded mt-1 focus:ring-purple-500"/>
                      <div className="ml-3 text-sm">
                          <label htmlFor="consent-partner" className="text-gray-400">Eu concordo que meus dados sejam processados para esta proposta de parceria.</label>
                      </div>
                  </div>

                  {formError && (
                    <div className="flex items-center gap-2 text-red-400 bg-red-500/10 border border-red-500/30 p-3 rounded-lg">
                      <AlertTriangle className="w-5 h-5"/>
                      <p className="text-sm">{formError}</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {status === 'loading' && <Loader2 className="w-6 h-6 animate-spin" />}
                    {status === 'loading' ? 'Enviando...' : 'Quero ser Parceiro'}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
