module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    flex: {
      '1': '1 1 20rem',
      auto: '1 1 auto',
     initial: '0 1 auto',
     inherit: 'inherit',
      none: 'none',
     '2': '2 2 0%',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
