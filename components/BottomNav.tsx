'use client'

import { useRouter } from 'next/navigation'

interface BottomNavProps {
    backHref?: string
    nextHref?: string
    backLabel?: string
    nextLabel?: string
}

export function BottomNav({
    backHref,
    nextHref,
    backLabel = 'Retour',
    nextLabel = 'Suivant'
}: BottomNavProps) {
    const router = useRouter()

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex items-center justify-between gap-4 max-w-4xl mx-auto">
                    {/* Back Button */}
                    {backHref ? (
                        <button
                            onClick={() => router.push(backHref)}
                            className="flex-1 sm:flex-none px-6 py-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-pulse hover:bg-gray-50 transition-colors duration-200 min-w-[120px]"
                        >
                            {backLabel}
                        </button>
                    ) : (
                        <div className="flex-1 sm:flex-none min-w-[120px]"></div>
                    )}

                    {/* Next Button */}
                    {nextHref && (
                        <button
                            onClick={() => router.push(nextHref)}
                            className="flex-1 sm:flex-none px-6 py-3 text-sm font-medium text-white bg-gray-900 rounded-pulse hover:bg-gray-800 transition-colors duration-200 min-w-[120px] shadow-md"
                        >
                            {nextLabel}
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}
