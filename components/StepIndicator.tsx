interface StepIndicatorProps {
    current: number
    total: number
}

export function StepIndicator({ current, total }: StepIndicatorProps) {
    const progress = (current / total) * 100

    return (
        <div className="flex flex-col items-end space-y-1">
            <span className="text-xs font-medium text-gray-600">
                {current}/{total}
            </span>
            <div className="w-16 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                <div
                    className="h-full bg-pulse-accent transition-all duration-300 ease-out"
                    style={{ width: `${progress}%` }}
                />
            </div>
        </div>
    )
}
