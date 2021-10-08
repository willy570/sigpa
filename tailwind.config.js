module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      backgroundImage: {
        'logo-unesco': "url('https://www.ripleybelieves.com/img/society-2018/what-is-unesco.jpg')",
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
