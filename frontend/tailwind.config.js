/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        rose: { 
          DEFAULT: '#f72585', 
          100: '#37021a', 
          200: '#6e0434', 
          300: '#a5064e', 
          400: '#dc0868', 
          500: '#f72585', 
          600: '#f9529d', 
          700: '#fa7db5', 
          800: '#fca8ce', 
          900: '#fdd4e6' 
        },
        grape: { 
          DEFAULT: '#7209b7', 
          100: '#170225', 
          200: '#2e034a', 
          300: '#45056f', 
          400: '#5c0794', 
          500: '#7209b7', 
          600: '#980df4', 
          700: '#b14af6', 
          800: '#cb86f9', 
          900: '#e5c3fc' 
        },
        zaffre: { 
          DEFAULT: '#3a0ca3', 
          100: '#0b0220', 
          200: '#170541', 
          300: '#220761', 
          400: '#2e0a81', 
          500: '#3a0ca3', 
          600: '#4f11e0', 
          700: '#7743f1', 
          800: '#a582f6', 
          900: '#d2c0fa' 
        },
        'neon-blue': { 
          DEFAULT: '#4361ee', 
          100: '#050f38', 
          200: '#0a1d70', 
          300: '#102ca8', 
          400: '#153ae0', 
          500: '#4361ee', 
          600: '#6a83f1', 
          700: '#8fa2f5', 
          800: '#b4c1f8', 
          900: '#dae0fc' 
        },
        'sky-blue': { 
          DEFAULT: '#4cc9f0', 
          100: '#052e3a', 
          200: '#095c75', 
          300: '#0e8aaf', 
          400: '#13b8ea', 
          500: '#4cc9f0', 
          600: '#70d5f3', 
          700: '#93dff6', 
          800: '#b7eaf9', 
          900: '#dbf4fc' 
        },
        arkivis: {
          darkPurple: '#27005D',    // Dark Navy Purple - dark mode background
          neonPurple: '#9400FF',    // Vibrant Neon Purple - primary accent color
          neonPurpleHover: '#A84EFF', // Hover state for accent color
          lightBlue: '#AED2FF',     // Soft Light Blue - light mode surfaces
          iceBlue: '#E4F1FF',       // Ice Blue - light mode background
          // Text colors
          lightText: '#F9FAFB',     // Light text for dark mode
          mutedLight: '#D1D5DB',    // Muted text for dark mode
          darkText: '#111827',      // Dark text for light mode
          mutedDark: '#4B5563',     // Muted text for light mode
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'arkivis': '12px',
      },
      boxShadow: {
        'arkivis': '0 4px 14px 0 rgba(0, 0, 0, 0.05)',
        'arkivis-lg': '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
} 