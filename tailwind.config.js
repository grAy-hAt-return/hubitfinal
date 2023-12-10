module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./HOC/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: { max: "575.98px" },
      sm: { min: "576px", max: "767.98px" },
      md: { min: "768px", max: "991.98px" },
      lg: { min: "992px", max: "1199.98px" },
      xl: { min: "1200px", max: "1399.98px" },
      xxl:{ min: "1400px" },
    },
    extend: {
      colors: {
        main: "rgba(160, 4, 125)",
        hoverMain: "#c2259f",
        purple:"#A0047D",
        textGray:"#9CA3AF",
        boxyellwo:"#FACC15",
        professional:"rgba(0, 87, 255, 0.97);",
        crown:"#E9A115",
        level:"#FF005C",
        mapbox:"#EEEAEA",
        python: "#387EB8",
        node:"#83CD29",
        js:"#FF7A00",
        mobile:"#090503",
        graphic:'#31A8FF',
        android:"#0DD90D",
        web:"#20D8E3",
      },
      height: {
        84: "21rem",
        94: "22rem",
        98: "27rem",
        100: "28rem",
        103: "32rem",
        104: "32.5rem",
        108: "34rem",
      },
      width: {
        84: "21rem",
        94: "22rem",
        98: "27rem",
        100: "28rem",
        104: "31rem",
        108: "36rem",
        110: "38rem",
      },
      top: {
        104: "28rem",
      },
      animation:{
        'spin-slow': 'spin 19s linear infinite',
        'spinopp': 'spin 19s linear infinite',
        // 'spin-slowest': 'spin 1s linear infinite',
        'swing': 'swing 10s ease-in-out infinite',
        'motion': 'motion 10s ease-in infinite',
        'scale': 'scale 5s ease-in infinite',
      },
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        scale: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)' },
        },
        spinopp : {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-180deg)' },
        },
        swing: {
          '0%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(40deg)' },
          // '50%': { transform: 'rotate(0deg)' },
          '75%': { transform: 'rotate(-45deg)' },
          '100%': { transform: 'rotate(0deg)' },
      },
      motion: {
          '0%': { top: '0%', left: '50%' },
          '25%': { top: '50%', right: '10%' },
          '50%': { bottom: '0%', right: '50%' },
          '75%': { bottom: '50%', left: '0%' },
          '100%': { top: '0%', left: '50%' },

      }
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    
    // require('tailwind-scrollbar-hide'),

    function({addUtilities}){
      const newUtilities = {
        ".no-scrollbar::-webkit-scrollbar":{
          display: "none",
        },
        '.no-scrollbar':{
          '-ms-overflow-style':'none',
          'scrollbar-width':'none',
        }
      }
      addUtilities(newUtilities)
    }

  ],
};
