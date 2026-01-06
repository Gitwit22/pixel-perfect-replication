import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        neu: {
          bg: '#ECECEC', // Soft Background
          surface: '#F2F2F2', // Cards
          inset: '#E3E3E3', // Inset Fields
          accent: '#2F6B4F', // Henrico Green
          'accent-foreground': '#FFFFFF',
          secondary: '#4A5D6B', // Slate Blue-Gray
          'secondary-foreground': '#FFFFFF',
        },
        text: {
          primary: '#2B2B2B',
          muted: '#6F6F6F',
        },
        // Brand palette from design-colors.html (green / black / gold)
        brand: {
          green: '#2F6B4F',
          'green-dark': '#1E4533',
          'green-light': '#3D8A65',
          black: '#1A1A1A',
          gold: '#F4C430',
          'gold-dark': '#D4A017',
          white: '#FFFFFF',
          'gray-light': '#F5F5F5',
          gray: '#6B6B6B',
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        'neu-raised': '6px 6px 12px #C8CCD0, -6px -6px 12px #FFFFFF',
        'neu-raised-sm': '4px 4px 8px #C8CCD0, -4px -4px 8px #FFFFFF',
        'neu-raised-lg': '8px 8px 16px #C8CCD0, -8px -8px 16px #FFFFFF',
        'neu-inset': 'inset 4px 4px 8px #C8CCD0, inset -4px -4px 8px #FFFFFF',
        'neu-pressed': 'inset 3px 3px 6px #C8CCD0, inset -3px -3px 6px #FFFFFF',
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
        cta: "var(--shadow-cta)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "slide-up": {
          from: { transform: "translateY(100%)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "slide-up": "slide-up 0.3s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [tailwindcssAnimate as unknown as typeof tailwindcssAnimate],
};



export default config;
