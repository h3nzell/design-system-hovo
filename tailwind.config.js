/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}', './public/index.html'],
  purge: ["./src/components/**/*.jsx", "./src/components/**/*.js"],
  theme: {
    fontFamily: {
      primary: ['"Plus Jakarta Sans"', 'sans-serif'],
    },
    extend: {
      colors: {
        black: '#000000',
        white: '#ffffff',
        transparentBlack: '#1B212426',
        primary900: '#815200',
        primary800: '#BA7700',
        primary700: '#DB8C00',
        primary600: '#F59D00',
        primary500: '#FAA91A',
        primary400: '#FFBA40',
        primary300: '#FFC96A',
        primary200: '#FCDCA5',
        primary100: '#FEEED1',
        primary50: '#FFF5E4',
        primary25: '#1B212426',
        gray900: '#101828',
        gray800: '#1D2939',
        gray700: '#344054',
        gray600: '#475467',
        gray500: '#667085',
        gray400: '#98A2B3',
        gray300: '#D0D5DD',
        gray200: '#E4E7EC',
        gray100: '#F2F4F7',
        gray50: '#F9FAFB',
        gray25: '#FCFCFD',
        success900: '#04301D',
        success800: '#084B2F',
        success700: '#0F623F',
        success600: '#1B8457',
        success500: '#268D61',
        success400: '#43AB7F',
        success300: '#65B894',
        success200: '#7CC6A6',
        success100: '#C4E9D9',
        success50: '#E6F6EF',
        success25: '#F2FBF7',
        error900: '#7A271A',
        error800: '#912018',
        error700: '#B42318',
        error600: '#D92D20',
        error500: '#F3291A',
        error400: '#F97066',
        error300: '#FDA29B',
        error200: '#FECDCA',
        error100: '#FEE4E2',
        error50: '#FEF3F2',
        error25: '#FFFBFA',
        warning900: '#7A2E0E',
        warning800: '#93370D',
        warning700: '#B54708',
        warning600: '#DC6803',
        warning500: '#F79009',
        warning400: '#FDB022',
        warning300: '#FEC84B',
        warning200: '#FEDF89',
        warning100: '#FEF0C7',
        warning50: '#FFFAEB',
        warning25: '#FFFCF5',
        blue900: '#194185',
        blue800: '#1849A9',
        blue700: '#175CD3',
        blue600: '#1570EF',
        blue500: '#2E90FA',
        blue400: '#53B1FD',
        blue300: '#84CAFF',
        blue200: '#B2DDFF',
        blue100: '#D1E9FF',
        blue50: '#EFF8FF',
        blue25: '#F5FAFF',
        blueLight900: '#0B4A6F',
        blueLight800: '#065986',
        blueLight700: '#026AA2',
        blueLight600: '#0086C9',
        blueLight500: '#0BA5EC',
        blueLight400: '#36BFFA',
        blueLight300: '#7CD4FD',
        blueLight200: '#B9E6FE',
        blueLight100: '#E0F2FE',
        blueLight50: '#F0F9FF',
        blueLight25: '#F5FBFF',
        blueGray900: '#101323',
        blueGray800: '#293056',
        blueGray700: '#363F72',
        blueGray600: '#3E4784',
        blueGray500: '#4E5BA6',
        blueGray400: '#717BBC',
        blueGray300: '#9EA5D1',
        blueGray200: '#C8CCE5',
        blueGray100: '#EAECF5',
        blueGray50: '#F8F9FC',
        blueGray25: '#FCFCFD',
        purple900: '#42307D',
        purple800: '#53389E',
        purple700: '#6941C6',
        purple600: '#7F56D9',
        purple500: '#9E77ED',
        purple400: '#B692F6',
        purple300: '#B692F6',
        purple200: '#E9D7FE',
        purple100: '#F4EBFF',
        purple50: '#F9F5FF',
        purple25: '#FCFAFF',
        indigo900: '#2D3282',
        indigo800: '#2D31A6',
        indigo700: '#3538CD',
        indigo600: '#444CE7',
        indigo500: '#6172F3',
        indigo400: '#8098F9',
        indigo300: '#A4BCFD',
        indigo200: '#C7D7FE',
        indigo100: '#E0EAFF',
        indigo50: '#EEF4FF',
        indigo25: '#F5F8FF',
        rose900: '#89123E',
        rose800: '#A11043',
        rose700: '#C01048',
        rose600: '#E31B54',
        rose500: '#F63D68',
        rose400: '#FD6F8E',
        rose300: '#FEA3B4',
        rose200: '#FECDD6',
        rose100: '#FFE4E8',
        rose50: '#FFF1F3',
        rose25: '#FFF5F6',
        pink900: '#851651',
        pink800: '#9E165F',
        pink700: '#C11574',
        pink600: '#DD2590',
        pink500: '#EE46BC',
        pink400: '#F670C7',
        pink300: '#FAA7E0',
        pink200: '#FCCEEE',
        pink100: '#FCE7F6',
        pink50: '#FDF2FA',
        pink25: '#FEF6FB',
      },
    },
  },
  plugins: [],
}
