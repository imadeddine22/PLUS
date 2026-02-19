import { ReactNode } from 'react'

interface CardProps {
    children: ReactNode
    className?: string
    variant?: 'default' | 'active' | 'inactive'
}

export function Card({ children, className = '', variant = 'default' }: CardProps) {
    const variantStyles = {
        default: 'bg-white border-gray-200',
        active: 'bg-pulse-accent/5 border-pulse-accent',
        inactive: 'bg-gray-50 border-gray-300',
    }

    return (
        <div
            className={`
        border rounded-pulse shadow-sm p-6 sm:p-8 transition-all duration-200
        ${variantStyles[variant]}
        ${className}
      `}
        >
            {children}
        </div>
    )
}
