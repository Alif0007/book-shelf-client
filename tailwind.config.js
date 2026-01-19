/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Modern minimalist palette
                primary: {
                    50: '#f0fdfa',      // Very light teal
                    100: '#ccfbf1',     // Light teal
                    200: '#99f6e4',     // Lighter teal
                    300: '#5eead4',     // Pale teal
                    400: '#2dd4bf',     // Soft teal (dark mode primary)
                    500: '#0D9488',     // Soft teal/blue (light mode primary)
                    600: '#0f766e',     // Medium teal
                    700: '#115e59',     // Darker teal
                    800: '#134e4a',     // Deep teal
                    900: '#14443e',     // Near-black teal
                },
                secondary: {
                    50: '#fdf2f8',
                    100: '#fce7f3',
                    200: '#fbcfe8',
                    300: '#f9a8d4',
                    400: '#f472b6',
                    500: '#ec4899', // Pink accent
                    600: '#db2777',
                    700: '#be185d',
                    800: '#9d174d',
                    900: '#831843',
                },
                neutral: {
                    50: '#f9fafb',      // Very light gray (light mode surface)
                    100: '#f3f4f6',     // Light gray
                    200: '#e5e7eb',     // Medium-light gray
                    300: '#d1d5db',     // Medium gray
                    400: '#9ca3af',     // Medium-dark gray
                    500: '#6B7280',     // Warm gray (accent color)
                    600: '#4b5563',     // Dark gray
                    700: '#374151',     // Darker gray
                    800: '#1f2937',     // Very dark gray (dark mode cards)
                    900: '#111827',     // Near black
                },
                base: {
                    50: '#FFFFFF',      // Pure white (light mode background)
                    100: '#F9FAFB',     // Very light gray (light mode surfaces)
                    200: '#E5E7EB',     // Light gray
                    300: '#d1d5db',     // Medium gray
                    800: '#1F2937',     // Dark gray (dark mode cards)
                    900: '#0F1117',     // Near-black (dark mode background)
                }
            },
            fontFamily: {
                sans: ['Poppins', 'sans-serif'],
            },
        },
    },
    plugins: [],
}