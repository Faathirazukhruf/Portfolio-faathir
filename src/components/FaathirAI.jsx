import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, X, MessageSquare, User, Bot, Loader2, RotateCcw } from 'lucide-react';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize Gemini API
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

const Typewriter = ({ text, onComplete, speed = 20 }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText(prev => prev + text[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, speed);
            return () => clearTimeout(timeout);
        } else if (onComplete) {
            onComplete();
        }
    }, [currentIndex, text, speed, onComplete]);

    return <span>{displayedText}</span>;
};

const FaathirAI = () => {
    const [isOpen, setIsOpen] = useState(false);
    const initialMessage = { role: 'bot', content: "Hi! I'm Faathir AI. Ask me anything about my experience, projects, or how I can help you build impactful solutions!" };
    const [messages, setMessages] = useState([initialMessage]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isTyping, setIsTyping] = useState(false);
    const chatEndRef = useRef(null);

    const scrollToBottom = () => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isLoading, isTyping]);

    const handleClearChat = () => {
        setMessages([initialMessage]);
        setIsTyping(false);
    };

    const systemInstruction = `
    You are Faathir, a passionate Fullstack Developer and AI-focused problem solver. 
    Answer as Faathir in the first person ("I", "my", "mine").
    Tone: Friendly, confident, professional yet "chill" and approachable. 
    
    Personality & Goals:
    - You don't just "code" — you design end-to-end solutions that solve real business problems.
    - You think in terms of system architecture, reliability, and scalability.
    - You are enthusiastic about AI (LLMs, RAG, Automation, Agents).
    
    Knowledge Base:
    - Expertise: JavaScript, Python, React.js, Next.js, Nest.js, Express.js, PostgreSQL, MySQL.
    - Specialized: Web3 (Solidity, Web3.js, Ethers.js), AI Automation (n8n, OpenClaw, PyTorch, RAG, Token Optimization).
    - Experience: Healthcare and Manufacturing industries.
    - Role: Analyzing user needs, designing architecture from scratch, and building functional + efficient systems.
    
    Interaction Rules:
    - Language: Respond in the language used by the user (Indonesian or English). If they talk in Indonesian, answer in Indonesian.
    - Formatting: DO NOT use Markdown formatting like asterisks (*) for bolding or emphasis. Keep the text plain and clean.
    - Small Talk: If asked irrelevant things (receh), answer briefly/casually but quickly pivot back to talking about your portfolio, tech, or collaborations.
    - Collaboration/Hiring: If someone wants to work together, suggest the Contact section (email or WhatsApp). Mention that I'm always open to new opportunities.
    - Conciseness: Keep responses insightful but not overly long.
    `;

    const handleSendMessage = async () => {
        if (!input.trim() || isLoading || isTyping) return;

        const userMessage = input.trim();
        const previousMessages = [...messages];
        setInput('');
        setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
        setIsLoading(true);

        try {
            const model = genAI.getGenerativeModel({ 
                model: "gemini-2.5-flash", 
                systemInstruction: systemInstruction
            });

            const history = previousMessages
                .slice(1)
                .filter(msg => !msg.content.includes("technical glitch"))
                .map(msg => ({
                    role: msg.role === 'user' ? 'user' : 'model',
                    parts: [{ text: msg.content }]
                }));

            const chat = model.startChat({ history });
            const result = await chat.sendMessage(userMessage);
            const response = await result.response;
            const text = response.text().replaceAll('*', '');

            setIsLoading(false);
            setIsTyping(true);
            setMessages(prev => [...prev, { role: 'bot', content: text, isNew: true }]);
        } catch (error) {
            console.error("Gemini Error:", error);
            setIsLoading(false);
            setMessages(prev => [...prev, { role: 'bot', content: "Sorry, I'm having a bit of a technical glitch. Try again in a second!" }]);
        }
    };

    const suggestedQuestions = [
        "What projects has Faathir built?",
        "Tell me about your AI experience",
        "Apa saja teknologi yang kamu gunakan?",
        "Are you available for freelance?"
    ];

    return (
        <div className="fixed bottom-6 right-6 z-[9999]">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="mb-4 w-[380px] h-[550px] max-w-[90vw] max-h-[80vh] bg-[#0B1120] border border-white/10 rounded-3xl shadow-2xl flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="p-4 bg-primary/10 border-b border-white/10 flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                                    <Bot size={24} className="text-white" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-white text-sm">Faathir AI</h3>
                                    <div className="flex items-center gap-1">
                                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                        <span className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">Online</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-1">
                                <button 
                                    onClick={handleClearChat}
                                    title="Clear Chat"
                                    className="p-2 hover:bg-white/5 rounded-full text-gray-400 transition-colors"
                                >
                                    <RotateCcw size={18} />
                                </button>
                                <button 
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 hover:bg-white/5 rounded-full text-gray-400 transition-colors"
                                >
                                    <X size={20} />
                                </button>
                            </div>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide">
                            {messages.map((msg, index) => (
                                <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`flex gap-2 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                                        <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center ${msg.role === 'user' ? 'bg-secondary' : 'bg-primary'}`}>
                                            {msg.role === 'user' ? <User size={16} className="text-white" /> : <Bot size={16} className="text-white" />}
                                        </div>
                                        <div className={`p-3 rounded-2xl text-sm leading-relaxed ${
                                            msg.role === 'user' 
                                            ? 'bg-secondary/20 text-white rounded-tr-none border border-secondary/20 shadow-lg shadow-secondary/5' 
                                            : 'bg-white/5 text-gray-200 rounded-tl-none border border-white/10 shadow-lg shadow-black/20'
                                        }`}>
                                            {msg.role === 'bot' && msg.isNew ? (
                                                <Typewriter 
                                                    text={msg.content} 
                                                    onComplete={() => {
                                                        setIsTyping(false);
                                                        setMessages(prev => prev.map((m, i) => i === index ? { ...m, isNew: false } : m));
                                                    }} 
                                                />
                                            ) : (
                                                msg.content
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                            {isLoading && (
                                <div className="flex justify-start">
                                    <div className="flex gap-2 items-center text-gray-400 bg-white/5 p-3 rounded-2xl rounded-tl-none border border-white/10 shadow-lg shadow-black/20">
                                        <Loader2 size={16} className="animate-spin" />
                                        <span className="text-xs italic font-medium">Faathir is thinking...</span>
                                    </div>
                                </div>
                            )}
                            <div ref={chatEndRef} />
                        </div>

                        {/* Suggested Questions */}
                        {messages.length === 1 && !isLoading && !isTyping && (
                            <div className="px-4 pb-2 flex flex-wrap gap-2">
                                {suggestedQuestions.map((q, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setInput(q)}
                                        className="text-[11px] px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-primary/50 transition-all font-medium"
                                    >
                                        {q}
                                    </button>
                                ))}
                            </div>
                        )}

                        {/* Input */}
                        <div className="p-4 border-t border-white/10 bg-black/60 backdrop-blur-md">
                            <form 
                                onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }}
                                className="flex gap-2"
                            >
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Ask me anything..."
                                    className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-primary/50 transition-all"
                                />
                                <button
                                    type="submit"
                                    disabled={isLoading || isTyping || !input.trim()}
                                    className="w-10 h-10 bg-primary hover:bg-primary-hover disabled:opacity-50 disabled:cursor-not-allowed rounded-xl flex items-center justify-center transform active:scale-95 transition-all text-white shadow-lg shadow-primary/20"
                                >
                                    <Send size={18} />
                                </button>
                            </form>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Toggle Button */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-3 bg-primary hover:bg-primary-hover text-white px-5 py-3 rounded-full shadow-lg shadow-primary/20 transition-all group"
            >
                <div className="relative">
                    <MessageSquare size={24} className={isOpen ? 'hidden' : 'block'} />
                    <X size={24} className={isOpen ? 'block' : 'hidden'} />
                    {!isOpen && <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 border-2 border-primary rounded-full" />}
                </div>
                <span className="font-bold text-sm tracking-wide">Faathir AI</span>
            </motion.button>
        </div>
    );
};

export default FaathirAI;
