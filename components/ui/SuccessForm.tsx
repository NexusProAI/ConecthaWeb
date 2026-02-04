"use client";

import { useState } from "react";
import { X, Loader2, CheckCircle, AlertTriangle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface SuccessFormProps {
  isOpen: boolean;
  onClose: () => void;
}

type FormStatus = "idle" | "loading" | "success" | "error";

export default function SuccessForm({ isOpen, onClose }: SuccessFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
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
    if (!name || !email || !company) {
      setFormError("Por favor, preencha os campos obrigatórios.");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, company, message }),
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
    // Reset form state on close
    setTimeout(() => {
        setName("");
        setEmail("");
        setPhone("");
        setCompany("");
        setMessage("");
        setConsent(false);
        setFormError(null);
        setStatus("idle");
    }, 300); // delay to allow exit animation
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
                 <h2 className="text-2xl font-bold text-white mb-2">Enviado com Sucesso!</h2>
                 <p className="text-gray-300">Obrigado pelo seu interesse. Entraremos em contato em breve.</p>
                 <button onClick={handleClose} className="mt-6 px-6 py-2 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700">Fechar</button>
               </div>
            ) : (
              <>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  Seja nosso Próximo Case de Sucesso
                </h2>
                <p className="text-gray-400 mb-6">
                  Preencha o formulário e nossa equipe entrará em contato.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                      Seu Nome <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                      Telefone (Opcional)
                    </label>
                    <input
                      type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1">
                      Nome da Empresa <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text" id="company" value={company} onChange={(e) => setCompany(e.target.value)} required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                      Mensagem
                    </label>
                    <textarea
                      id="message" rows={3} value={message} onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
                    ></textarea>
                  </div>
                  
                  <div className="flex items-start">
                      <input id="consent" name="consent" type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} className="h-4 w-4 text-purple-600 border-gray-500 rounded mt-1 focus:ring-purple-500"/>
                      <div className="ml-3 text-sm">
                          <label htmlFor="consent" className="text-gray-400">Eu concordo em ser contatado e que meus dados sejam processados de acordo com a política de privacidade.</label>
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
                    {status === 'loading' ? 'Enviando...' : 'Enviar Solicitação'}
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