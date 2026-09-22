/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        studio: {
          950: '#090a0f',
          900: '#11131a',
          850: '#161922',
          800: '#1e2230',
          750: '#262c3e',
          700: '#32394f',
          600: '#46506d',
          500: '#63739a',
          400: '#8c9cbf',
        },
        nle: {
          video: '#4f46e5',     // Indigo for video track
          videoHover: '#6366f1',
          videoBorder: '#818cf8',
          audio: '#0d9488',     // Teal/Emerald for audio track
          audioHover: '#14b8a6',
          audioBorder: '#2dd4bf',
          playhead: '#ef4444',  // Red scrubber needle
        }
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'Cascadia Code', 'Consolas', 'monospace'],
      }
    },
  },
  plugins: [],
}
