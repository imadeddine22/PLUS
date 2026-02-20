export function Hero() {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-pulse-accent/20 text-white px-4 sm:px-6 lg:px-8 pt-16">
            <div className="max-w-7xl w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-8 text-center lg:text-left">
                        <div className="inline-block">
                            <span className="px-4 py-2 bg-pulse-accent/20 border border-pulse-accent/30 rounded-full text-sm font-medium text-pulse-accent">
                                Assurance nouvelle génération
                            </span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                            PULSE –<br />
                            L'assurance qui<br />
                            s'adapte à{' '}
                            <span className="text-pulse-accent">l'usage</span>
                        </h1>

                        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0">
                            Activez, utilisez, comprenez. Vous ne payez plus à l'aveugle.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <a
                                href="#insurance"
                                className="px-8 py-4 bg-pulse-accent text-white rounded-pulse font-medium hover:bg-pulse-accent-dark transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-center"
                            >
                                Commencer
                            </a>
                            <a
                                href="#usage"
                                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-pulse font-medium hover:bg-white/20 transition-all duration-200 text-center"
                            >
                                En savoir plus
                            </a>
                        </div>

                        {/* Trust Indicators */}
                        <div className="grid grid-cols-3 gap-6 pt-8">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-pulse-accent">100%</div>
                                <div className="text-sm text-gray-400 mt-1">Transparent</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-pulse-accent">0 DZD</div>
                                <div className="text-sm text-gray-400 mt-1">Frais cachés</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-pulse-accent">24/7</div>
                                <div className="text-sm text-gray-400 mt-1">Disponible</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Visual */}
                    <div className="relative hidden lg:block">
                        <div className="relative w-full h-[600px]">
                            {/* Animated circles */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-96 h-96 rounded-full bg-pulse-accent/10 animate-pulse"></div>
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-72 h-72 rounded-full bg-pulse-accent/20 animate-pulse delay-75"></div>
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-48 h-48 rounded-full bg-pulse-accent/30 flex items-center justify-center">
                                    <svg width="96" height="96" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M50 8L14 24v26c0 22 16 41 36 48 20-7 36-26 36-48V24L50 8z" stroke="#ffffffff" strokeWidth="7" strokeLinejoin="round" fill="none" />
                                        <polyline points="22,50 34,50 40,36 50,64 60,42 66,50 78,50" stroke="#ffffffff" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </section>
    )
}
