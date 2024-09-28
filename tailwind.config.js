module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      txt_primary: '#000000',
      txt_secondary: '#616272',
      main_primary: '#F7FF00', // main_primary 정의
      background_elevated: '#f5f6f8',
      gray: {
        950: '#303136',
        900: '#52535d',
        800: '#616272',
        700: '#77798b',
        600: '#8a8ba1',
        500: '#a0a3b4',
        400: '#b4b8c5',
        300: '#d7d7de',
        200: '#dfe1e6',
        100: '#edeff2',
        50: '#f5f6f8',
      },
      white: '#ffffff',
      main: {
        900: '#745B0F',
        800: '#89700A',
        700: '#A69002',
        600: '#D1C500',
        500: '#F7FF00', // main_primary
        400: '#EBFF0D',
        300: '#E6FF41',
        200: '#EAFF86',
        100: '#F2FFC1',
      },
      // System 색상
      red: {
        400: '#CE3E57',
        300: '#FF4D6C',
        200: '#FFCAD3',
        100: '#FFF5F6',
      },
      blue: {
        300: '#067DFD',
        200: '#CAE8FF',
        100: '#EEF7FF',
      },
      green: {
        300: '#0CD380',
        200: '#9FF3D0',
        100: '#D8FBED',
        50: '#EEFFF6',
      },
      headerText: '#000000', // Black 컬러
      bodyText: '#1F2937', // Gray 800 컬러
    },
    extend: {
      // components 분기의 padding 확장
      padding: {
        'min-24px': '24px',
        'min-20px': '20px',
        'min-16px': '16px',
        'min-10px': '10px',
      },
      // develop 분기의 스타일 확장
      fontFamily: {
        sans: [
          'Galmuri14',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          'Fira Sans',
          'Droid Sans',
          'Helvetica Neue',
          'sans-serif',
        ], // 수정된 부분
      },
      fontSize: {
        base: '16px',
        large: '24px',
        xlarge: '48px',
      },
      borderRadius: {
        description: '16px',
      },
      boxShadow: {
        description: '0px 4px 4px 0px #000',
      },
      dropShadow: {
        triangle: '0px 4px 4px 0px #000',
      },
      lineHeight: {
        title: '33.6px',
        content: '24px',
        onBoarding: '16.8px',
      },
    },
  },
  variants: {},
  plugins: [],
};
