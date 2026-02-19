import { Card } from '@/components/Card'
import { ProgressRing } from '@/components/ProgressRing'

export function Score() {
    return (
        <section id="score" className="py-20 sm:py-32 bg-white px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-pulse-accent font-semibold text-sm uppercase tracking-wide">
                        Votre profil
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-6">
                        Score PULSE
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Votre score reflète vos habitudes d'utilisation et influence positivement votre coût dans le temps.
                    </p>
                </div>

                <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Score Display */}
                    <Card className="flex flex-col items-center justify-center space-y-6 p-8 sm:p-12">
                        <ProgressRing value={78} max={100} size={240} strokeWidth={16} />

                        <div className="text-center space-y-2">
                            <h3 className="text-2xl font-bold text-gray-900">Bon score</h3>
                            <p className="text-sm text-gray-600 max-w-sm">
                                Continuez ainsi pour optimiser votre assurance et bénéficier de meilleures conditions.
                            </p>
                        </div>
                    </Card>

                    {/* Score Details */}
                    <div className="space-y-4">
                        <Card>
                            <h3 className="text-lg font-bold text-gray-900 mb-6">Détails du score</h3>

                            <div className="space-y-4">
                                {/* Régularité */}
                                <div className="flex items-center justify-between p-4 bg-green-50 border border-green-200 rounded-pulse">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                                            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <span className="font-semibold text-gray-900">Régularité</span>
                                    </div>
                                    <span className="text-sm font-bold text-green-700 bg-green-100 px-4 py-1.5 rounded-full">
                                        Bonne
                                    </span>
                                </div>

                                {/* Prudence */}
                                <div className="flex items-center justify-between p-4 bg-blue-50 border border-blue-200 rounded-pulse">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                                            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0121 12c0 .746-.074 1.476-.217 2.185m0 0A11.952 11.952 0 0119.5 17.5m.217-5.315l-7.5-7.5-4.5 4.5m-6 5.5l7.5 7.5 4.5-4.5m0 0l7.5-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <span className="font-semibold text-gray-900">Prudence</span>
                                    </div>
                                    <span className="text-sm font-bold text-blue-700 bg-blue-100 px-4 py-1.5 rounded-full">
                                        Très bien
                                    </span>
                                </div>

                                {/* Stabilité */}
                                <div className="flex items-center justify-between p-4 bg-yellow-50 border border-yellow-200 rounded-pulse">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">
                                            <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                            </svg>
                                        </div>
                                        <span className="font-semibold text-gray-900">Stabilité</span>
                                    </div>
                                    <span className="text-sm font-bold text-yellow-700 bg-yellow-100 px-4 py-1.5 rounded-full">
                                        OK
                                    </span>
                                </div>
                            </div>
                        </Card>

                        <Card className="bg-gray-50">
                            <div className="flex items-start space-x-3">
                                <svg className="w-5 h-5 text-pulse-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-1">À quoi sert le score ?</h4>
                                    <p className="text-sm text-gray-600">
                                        Le score PULSE est un outil de transparence qui peut vous permettre d'accéder à de meilleures conditions tarifaires. Ce n'est pas une pénalité.
                                    </p>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}
