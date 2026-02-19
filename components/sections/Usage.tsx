import { Card } from '@/components/Card'

export function Usage() {
    return (
        <section id="usage" className="py-20 sm:py-32 bg-gray-50 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-pulse-accent font-semibold text-sm uppercase tracking-wide">
                        Transparence totale
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-6">
                        Usage & coût
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Consultez votre consommation en temps réel. Le coût s'ajuste automatiquement à votre usage.
                    </p>
                </div>

                <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Usage Card */}
                    <Card className="space-y-6">
                        <div className="flex items-center justify-between">
                            <h3 className="text-xl font-bold text-gray-900">Usage du mois</h3>
                            <span className="text-sm text-gray-500">Octobre</span>
                        </div>

                        <div className="grid grid-cols-3 gap-4">
                            <div className="text-center p-6 bg-gradient-to-br from-pulse-accent/5 to-pulse-accent/10 rounded-pulse">
                                <div className="text-4xl font-bold text-gray-900 mb-2">12</div>
                                <div className="text-sm text-gray-600 uppercase tracking-wide">Jours</div>
                            </div>

                            <div className="text-center p-6 bg-gradient-to-br from-pulse-accent/5 to-pulse-accent/10 rounded-pulse">
                                <div className="text-4xl font-bold text-gray-900 mb-2">36</div>
                                <div className="text-sm text-gray-600 uppercase tracking-wide">Heures</div>
                            </div>

                            <div className="text-center p-6 bg-gradient-to-br from-pulse-accent/5 to-pulse-accent/10 rounded-pulse">
                                <div className="text-4xl font-bold text-gray-900 mb-2">420</div>
                                <div className="text-sm text-gray-600 uppercase tracking-wide">Unités</div>
                            </div>
                        </div>

                        <div className="pt-4 border-t border-gray-200">
                            <div className="flex items-start space-x-3">
                                <svg className="w-5 h-5 text-pulse-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <p className="text-sm text-gray-600">
                                    Votre usage est mesuré en temps réel pour un calcul précis de votre coût.
                                </p>
                            </div>
                        </div>
                    </Card>

                    {/* Cost Card */}
                    <Card className="bg-gradient-to-br from-pulse-accent/5 via-pulse-accent/10 to-pulse-accent/5 border-pulse-accent/30 space-y-6">
                        <h3 className="text-xl font-bold text-gray-900">Coût estimé</h3>

                        <div className="space-y-4">
                            <div className="flex items-baseline space-x-3">
                                <span className="text-5xl sm:text-6xl font-bold text-gray-900">8 400</span>
                                <span className="text-2xl font-semibold text-gray-600">DZD</span>
                            </div>

                            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                                </svg>
                                <span>-30% vs forfait classique</span>
                            </div>
                        </div>

                        <div className="pt-4 border-t border-pulse-accent/20 space-y-3">
                            <div className="flex items-start space-x-3">
                                <svg className="w-5 h-5 text-pulse-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <p className="text-sm text-gray-700">
                                    <strong>Le coût est calculé à partir de votre usage</strong>, pas d'un forfait figé.
                                </p>
                            </div>

                            <div className="flex items-start space-x-3">
                                <svg className="w-5 h-5 text-pulse-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <p className="text-sm text-gray-700">
                                    Pas de frais cachés, pas de forfait mensuel imposé.
                                </p>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    )
}
