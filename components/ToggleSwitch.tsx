'use client'

import { useState } from 'react'

interface ToggleSwitchProps {
    defaultChecked?: boolean
    onChange?: (checked: boolean) => void
    label?: string
}

export function ToggleSwitch({ defaultChecked = false, onChange, label }: ToggleSwitchProps) {
    const [checked, setChecked] = useState(defaultChecked)

    const handleToggle = () => {
        const newValue = !checked
        setChecked(newValue)
        onChange?.(newValue)
    }

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === ' ' || e.key === 'Enter') {
            e.preventDefault()
            handleToggle()
        }
    }

    return (
        <div className="flex items-center space-x-3">
            <button
                role="switch"
                aria-checked={checked}
                aria-label={label}
                onClick={handleToggle}
                onKeyDown={handleKeyDown}
                className={`
          relative inline-flex h-8 w-14 items-center rounded-full transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-pulse-accent focus:ring-offset-2
          ${checked ? 'bg-pulse-accent' : 'bg-gray-300'}
        `}
            >
                <span
                    className={`
            inline-block h-6 w-6 transform rounded-full bg-white shadow-lg transition-transform duration-200 ease-in-out
            ${checked ? 'translate-x-7' : 'translate-x-1'}
          `}
                />
            </button>
            {label && (
                <span className="text-sm font-medium text-gray-700">{label}</span>
            )}
        </div>
    )
}
