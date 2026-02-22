/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        star:"#FCCC1C",
        inputBorder:"#E4E4E7",
        textgray:"#8C8C8C",
        primary:"#465FFF",
        primaryTwo:"#F0F2FF",
        primaryThree:"#FAFBFF",
        secondary:"#161950",
        sidebar:"#5F6368",
        input:"#8C8C8C",
        borderInput:"#E4E4E7",
        background:"#F9FBFF",
        destructive:"#DC2626",
        tertiary:"#F6A221",
        success:"#16A34A",
        foreground: 'hsl(var(--foreground))',
        borderColor:"#979797",
    
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        instrument: ['Instrument Serif', 'serif'],
      },
        fontSize: {
        '24': '24px',
        '80':'80px',
        '16':"16px",
        '56':"56px",
      },

      boxShadow: {
        '2xs': 'var(--shadow-2xs)',
        xs: 'var(--shadow-xs)',
        sm: 'var(--shadow-sm)',
        DEFAULT: 'var(--shadow)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        xl: 'var(--shadow-xl)',
        '2xl': 'var(--shadow-2xl)',
      },
keyframes: {
  'logo-cloud': {
    from: { transform: 'translateX(0)' },
    to: { transform: 'translateX(calc(-100% - 4rem))' },
  },
  "accordion-down": {
    from: { height: "0" },
    to: { height: "var(--radix-accordion-content-height)" },
  },
  "accordion-up": {
    from: { height: "var(--radix-accordion-content-height)" },
    to: { height: "0" },
  },
  "slide-in-from-left": {
    from: { transform: "translateX(-100%)", opacity: "0" },
    to: { transform: "translateX(0)", opacity: "1" },
  },
   "slide-out-to-left": {
    from: { transform: "translateX(0)", opacity: "1" },
    to: { transform: "translateX(-100%)", opacity: "0" },
  },
  "fade-in": {
    from: { opacity: "0" },
    to: { opacity: "1" },
  },
},
animation: {
  'logo-cloud': 'logo-cloud 30s linear infinite',
  "accordion-down": "accordion-down 0.2s ease-out",
  "accordion-up": "accordion-up 0.2s ease-out",
  "slide-in-from-left": "slide-in-from-left 0.3s ease-out",
  "slide-out-to-left": "slide-out-to-left 0.3s ease-in",
  "fade-in": "fade-in 0.3s ease-out",
},
    
    },
  },
  plugins: [],
};