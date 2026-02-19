'use client'

import { useRouter, usePathname } from 'next/navigation'
import { StepIndicator } from './StepIndicator'

interface AppShellProps {
    children: React.ReactNode
    title?: string
    currentStep?: number
    totalSteps?: number
}

export function AppShell({ children, title = 'PULSE', currentStep, totalSteps }: AppShellProps) {
    const router = useRouter()
    const pathname = usePathname()
    const isHomePage = pathname === '/'

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Sticky Top Bar */}
            <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Back Button */}
                        <div className="w-20">
                            {!isHomePage && (
                                <button
                                    onClick={() => router.back()}
                                    className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                                    aria-label="Retour"
                                >
                                    <svg
                                        className="w-6 h-6 text-gray-700"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M15 19l-7-7 7-7"
                                        />
                                    </svg>
                                </button>
                            )}
                        </div>

                        {/* Title */}
                        <h1 className="text-xl font-bold text-gray-900">{title}</h1>

                        {/* Step Indicator */}
                        <div className="w-20 flex justify-end">
                            {currentStep && totalSteps && (
                                <StepIndicator current={currentStep} total={totalSteps} />
                            )}
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
                <div className="max-w-4xl mx-auto">
                    {children}
                </div>
            </main>
        </div>
    )
}
