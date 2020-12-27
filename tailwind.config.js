const colors = require('tailwindcss/colors')

module.exports = {
    purge: [
        './public/**/*.html',
        './src/**/*.vue',
    ],
    darkMode: 'media', // or 'media' or 'class'
    theme: {
        extend: {},
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            black: colors.black,
            white: colors.white,
            gray: colors.gray,
            blue: colors.blue,
            pink: colors.pink,
            'dark-blue-custom': '#181A24',
            'hover-dark-blue-custom': '#19273D',
            'cool-blue-border': '#19273D',
            'glowing-blue-border': '#62B6F8',
        }
    },
    variants: {
        extend: {},
    },
    plugins: [],
}