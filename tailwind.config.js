/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#030712",
        surface: "#0a0f1c",
        primary: "#001EFF", // Electric Blue
        cyber: "#00FF41", // Cyber Green
        text: "#f3f4f6",
        muted: "#9ca3af",
        border: "#1f2937",
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      backgroundImage: {
        'grain': "url('/noise.png')",
      }
    },
  },
  plugins: [],
}
