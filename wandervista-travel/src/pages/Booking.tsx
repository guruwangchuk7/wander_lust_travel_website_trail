import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle2, CreditCard, Gift, User, ArrowRight, ArrowLeft, ShieldCheck, Zap } from "lucide-react"
import { useNavigate } from "react-router-dom"

const Booking = () => {
    const [step, setStep] = useState(1)
    const navigate = useNavigate()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const steps = [
        { title: 'Identity', icon: User, id: 1 },
        { title: 'Enhancements', icon: Gift, id: 2 },
        { title: 'Liquidation', icon: CreditCard, id: 3 },
    ]

    const handleNext = () => {
        if (step < 3) setStep(step + 1)
        else {
            // Mock Final Action
            alert('Your journey has been secured. Welcome to Bhutan.')
            navigate('/')
        }
    }

    return (
        <div className="pt-32 pb-32 bg-[#FDFDFD] min-h-screen">
            <div className="max-w-6xl mx-auto px-6">
                {/* Superior Progress Bar */}
                <div className="flex items-center justify-between mb-24 max-w-3xl mx-auto relative px-10">
                    <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-100 -translate-y-1/2 -z-10 rounded-full" />

                    {steps.map((s) => (
                        <div key={s.id} className="relative flex flex-col items-center">
                            <motion.div
                                animate={{
                                    scale: step >= s.id ? 1.2 : 1,
                                    backgroundColor: step >= s.id ? "#003049" : "#F3F4F6",
                                    color: step >= s.id ? "#FFFFFF" : "#9CA3AF"
                                }}
                                className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-xl transition-all z-10 border-4 ${step >= s.id ? 'border-accent/20' : 'border-white'
                                    }`}
                            >
                                {step > s.id ? <CheckCircle2 className="w-8 h-8" /> : <s.icon className="w-6 h-6" />}
                            </motion.div>
                            <span className={`absolute -bottom-10 whitespace-nowrap text-[10px] font-black uppercase tracking-[0.2em] transition-colors ${step >= s.id ? 'text-primary' : 'text-gray-400'
                                }`}>
                                {s.title}
                            </span>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
                    {/* Main Content Area (7 cols) */}
                    <div className="lg:col-span-8">
                        <div className="bg-white rounded-[4rem] p-12 md:p-20 shadow-premium border border-gray-50 min-h-[600px] flex flex-col">
                            <AnimatePresence mode="wait">
                                {step === 1 && (
                                    <motion.div
                                        key="step1"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 20 }}
                                        className="flex-1"
                                    >
                                        <h2 className="text-4xl md:text-6xl font-black text-primary mb-12 tracking-tighter leading-none">Primary <span className="text-accent italic">Travelers</span></h2>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                            <div className="flex flex-col space-y-4">
                                                <label className="text-xs font-black text-gray-400 uppercase tracking-widest pl-4">First Designation</label>
                                                <input type="text" className="w-full bg-gray-50 border-none rounded-3xl px-8 py-6 outline-none focus:ring-4 focus:ring-accent/10 transition-all font-bold text-lg" placeholder="e.g. Tenzin" />
                                            </div>
                                            <div className="flex flex-col space-y-4">
                                                <label className="text-xs font-black text-gray-400 uppercase tracking-widest pl-4">Last Designation</label>
                                                <input type="text" className="w-full bg-gray-50 border-none rounded-3xl px-8 py-6 outline-none focus:ring-4 focus:ring-accent/10 transition-all font-bold text-lg" placeholder="e.g. Dorji" />
                                            </div>
                                            <div className="flex flex-col space-y-4 md:col-span-2">
                                                <label className="text-xs font-black text-gray-400 uppercase tracking-widest pl-4">Digital Identity (Email)</label>
                                                <input type="email" className="w-full bg-gray-50 border-none rounded-3xl px-8 py-6 outline-none focus:ring-4 focus:ring-accent/10 transition-all font-bold text-lg" placeholder="tenzin@bhutan.com" />
                                            </div>
                                        </div>
                                    </motion.div>
                                )}

                                {step === 2 && (
                                    <motion.div
                                        key="step2"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 1.05 }}
                                        className="flex-1"
                                    >
                                        <h2 className="text-4xl md:text-6xl font-black text-primary mb-12 tracking-tighter leading-none">Refine Your <br /> <span className="text-accent italic">Experience</span></h2>
                                        <div className="space-y-6">
                                            {[
                                                { title: 'Spiritual Concierge', price: '$150', desc: 'Private sessions with local Rinpoches.', icon: '🧘' },
                                                { title: 'Luxury Aviation', price: '$850', desc: 'Chartered helicopter flight over the peaks.', icon: '🚁' },
                                                { title: 'Gourmet Wilderness', price: '$120', desc: '5-course private dinner in a pine forest.', icon: '🍷' }
                                            ].map(addon => (
                                                <div key={addon.title} className="group flex items-center justify-between p-10 bg-gray-50 rounded-[3rem] border-2 border-transparent hover:border-accent hover:bg-white transition-all cursor-pointer shadow-sm hover:shadow-xl">
                                                    <div className="flex items-center space-x-8">
                                                        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-3xl shadow-sm group-hover:scale-110 transition-transform">{addon.icon}</div>
                                                        <div>
                                                            <h4 className="font-black text-2xl text-primary">{addon.title}</h4>
                                                            <p className="text-gray-400 font-medium">{addon.desc}</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col items-end">
                                                        <span className="font-black text-accent text-xl">{addon.price}</span>
                                                        <div className="mt-2 w-8 h-8 rounded-full border-2 border-gray-200 flex items-center justify-center group-hover:border-accent transition-colors">
                                                            <div className="w-4 h-4 rounded-full bg-accent scale-0 group-hover:scale-100 transition-transform" />
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}

                                {step === 3 && (
                                    <motion.div
                                        key="step3"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="flex-1"
                                    >
                                        <h2 className="text-4xl md:text-6xl font-black text-primary mb-12 tracking-tighter leading-none">Liquidation <br /> <span className="text-accent italic">Protocol</span></h2>

                                        {/* Visual Card Representation */}
                                        <div className="relative h-64 w-full bg-gradient-to-br from-primary to-black rounded-[2.5rem] p-10 text-white mb-12 shadow-2xl overflow-hidden group">
                                            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            <div className="flex justify-between items-start">
                                                <Zap className="w-10 h-10 text-gold fill-gold" />
                                                <div className="w-14 h-10 bg-white/10 rounded-lg flex items-center justify-center gap-1 border border-white/20">
                                                    <div className="w-4 h-4 rounded-full bg-accent/60" />
                                                    <div className="w-4 h-4 rounded-full bg-gold/60 -ml-1" />
                                                </div>
                                            </div>
                                            <div className="mt-12">
                                                <div className="text-3xl tracking-[0.3em] font-medium mb-8">•••• •••• •••• ••••</div>
                                                <div className="flex justify-between items-end">
                                                    <div>
                                                        <div className="text-[10px] text-white/30 uppercase font-black tracking-widest">Traveler Presence</div>
                                                        <div className="text-xl font-black tracking-wider uppercase">Your Digital Name</div>
                                                    </div>
                                                    <div className="text-right">
                                                        <div className="text-[10px] text-white/30 uppercase font-black tracking-widest">Horizon Date</div>
                                                        <div className="font-black tracking-widest">12 / 30</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-8">
                                            <input type="text" className="col-span-2 bg-gray-50 border-none rounded-3xl px-8 py-6 outline-none focus:ring-4 focus:ring-accent/10 transition-all font-bold" placeholder="Card Integrity Number" />
                                            <input type="text" className="bg-gray-50 border-none rounded-3xl px-8 py-6 outline-none focus:ring-4 focus:ring-accent/10 transition-all font-bold text-center" placeholder="Horizon MM/YY" />
                                            <input type="text" className="bg-gray-50 border-none rounded-3xl px-8 py-6 outline-none focus:ring-4 focus:ring-accent/10 transition-all font-bold text-center" placeholder="Security CVV" />
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <div className="mt-20 flex items-center justify-between">
                                {step > 1 ? (
                                    <button
                                        onClick={() => setStep(step - 1)}
                                        className="flex items-center space-x-3 text-gray-400 font-black uppercase tracking-widest hover:text-primary transition-colors"
                                    >
                                        <ArrowLeft className="w-6 h-6" />
                                        <span>Revisit</span>
                                    </button>
                                ) : <div />}

                                <button
                                    onClick={handleNext}
                                    className="btn-primary px-16 py-6 text-xl shadow-primary/20"
                                >
                                    <span>{step === 3 ? 'Finalize Order' : 'Proceed System'}</span>
                                    <ArrowRight className="w-6 h-6" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Superior Order Sidebar (5 cols) */}
                    <aside className="lg:col-span-4">
                        <div className="sticky top-32 space-y-10">
                            <div className="bg-white rounded-[4rem] p-10 shadow-premium border border-gray-50 overflow-hidden relative">
                                {/* Glass overlay hint */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl" />

                                <h3 className="text-2xl font-black text-primary mb-10 tracking-tight">Expedition <span className="text-accent underline decoration-gold/30">Manifest</span></h3>

                                <div className="flex items-center space-x-6 mb-12">
                                    <div className="w-24 h-24 rounded-[2rem] overflow-hidden shadow-xl shrink-0">
                                        <img src="/punakha-dzong.jpg" className="w-full h-full object-cover" alt="" />
                                    </div>
                                    <div>
                                        <h4 className="font-black text-xl text-primary leading-tight underline decoration-accent/20 underline-offset-4">Punakha Sacred Grounds Tour</h4>
                                        <p className="text-xs font-black text-gray-400 mt-2 uppercase tracking-widest flex items-center">
                                            <Zap className="w-3 h-3 text-accent mr-1 fill-accent" />
                                            Premium Private Slot
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-6 pt-10 border-t border-gray-100">
                                    <div className="flex justify-between items-center group">
                                        <span className="text-gray-400 font-bold group-hover:text-primary transition-colors">Base Itinerary (x2)</span>
                                        <span className="font-black text-primary">$1,798.00</span>
                                    </div>
                                    <div className="flex justify-between items-center group">
                                        <span className="text-gray-400 font-bold group-hover:text-primary transition-colors">SDF Government Tax</span>
                                        <span className="font-black text-primary">$400.00</span>
                                    </div>
                                    <div className="flex justify-between items-center group">
                                        <span className="text-gray-400 font-bold group-hover:text-primary transition-colors">Concierge Assistance</span>
                                        <span className="font-black text-accent">FREE</span>
                                    </div>
                                </div>

                                <div className="mt-12 pt-10 border-t-4 border-dashed border-gray-100">
                                    <div className="flex justify-between items-end">
                                        <div>
                                            <span className="block text-[10px] font-black text-gray-300 uppercase tracking-[0.3em] mb-2">Total Expedition Debt</span>
                                            <span className="text-4xl font-black text-primary tracking-tighter">$2,198.00</span>
                                        </div>
                                        <div className="bg-primary/5 p-4 rounded-2xl">
                                            <ShieldCheck className="w-6 h-6 text-primary" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Secure Transaction Hint */}
                            <div className="flex justify-center items-center space-x-2 text-[10px] font-black text-gray-300 uppercase tracking-widest">
                                <Zap className="w-3 h-3 " />
                                <span>Encrypted by WanderVista Secure protocol</span>
                                <Zap className="w-3 h-3 " />
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    )
}

export default Booking
