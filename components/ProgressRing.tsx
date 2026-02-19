interface ProgressRingProps {
    value: number
    max?: number
    size?: number
    strokeWidth?: number
}

export function ProgressRing({
    value,
    max = 100,
    size = 200,
    strokeWidth = 12
}: ProgressRingProps) {
    const radius = (size - strokeWidth) / 2
    const circumference = 2 * Math.PI * radius
    const progress = (value / max) * 100
    const offset = circumference - (progress / 100) * circumference

    return (
        <div className="relative inline-flex items-center justify-center">
            <svg
                width={size}
                height={size}
                className="transform -rotate-90"
            >
                {/* Background circle */}
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth={strokeWidth}
                />
                {/* Progress circle */}
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill="none"
                    stroke="#13ecda"
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                    className="transition-all duration-500 ease-out"
                />
            </svg>
            {/* Center text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl sm:text-5xl font-bold text-gray-900">
                    {value}
                </span>
                <span className="text-lg text-gray-500">/ {max}</span>
            </div>
        </div>
    )
}
