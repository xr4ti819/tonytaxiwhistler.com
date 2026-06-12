/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    theme: {
        extend: {
            fontFamily: {
                serif: ['Fraunces', 'Georgia', 'serif'],
                sans: ['Outfit', 'system-ui', 'sans-serif'],
            },
            colors: {
                background: '#0A0A0A',
                foreground: '#F8F9FA',
                surface: '#121418',
                surface2: '#1A1D24',
                gold: {
                    DEFAULT: '#D4AF37',
                    light: '#F2E3C6',
                    dark: '#8C6D1F',
                    glow: 'rgba(212, 175, 55, 0.2)',
                },
                fifa: '#FF6B35',
                emergency: '#D93838',
                whatsapp: '#25D366',
                card: {
                    DEFAULT: '#121418',
                    foreground: '#F8F9FA',
                },
                popover: {
                    DEFAULT: '#121418',
                    foreground: '#F8F9FA',
                },
                primary: {
                    DEFAULT: '#D4AF37',
                    foreground: '#0A0A0A',
                },
                secondary: {
                    DEFAULT: '#1A1D24',
                    foreground: '#F8F9FA',
                },
                muted: {
                    DEFAULT: '#1A1D24',
                    foreground: '#9BA1A6',
                },
                accent: {
                    DEFAULT: '#D4AF37',
                    foreground: '#0A0A0A',
                },
                destructive: {
                    DEFAULT: '#D93838',
                    foreground: '#F8F9FA',
                },
                border: 'rgba(255, 255, 255, 0.08)',
                input: '#1A1D24',
                ring: '#D4AF37',
            },
            borderRadius: {
                lg: '0.75rem',
                md: '0.5rem',
                sm: '0.375rem',
            },
            keyframes: {
                'accordion-down': { from: { height: '0' }, to: { height: 'var(--radix-accordion-content-height)' } },
                'accordion-up': { from: { height: 'var(--radix-accordion-content-height)' }, to: { height: '0' } },
                'fade-up': { '0%': { opacity: '0', transform: 'translateY(20px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
                'fade-up': 'fade-up 0.8s ease-out forwards',
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};
