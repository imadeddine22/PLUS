import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                pulse: {
                    accent: '#13ecda',
                    'accent-light': '#7ff4e8',
                    'accent-dark': '#0dbfad',
                },
            },
            borderRadius: {
                pulse: '12px',
            },
            fontFamily: {
                inter: ['var(--font-inter)', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
export default config
