/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.tsx'],
    theme: {
        screens: {
            'tablet': '375px',
            'header': '667px',
            'desktop': '768px',
            'line': '1220px'
        },
        extend: {
            backgroundImage: {
                homeDestkop: 'url(/src/assets/home/background-home-desktop.jpg)',
                homeTablet: 'url(/src/assets/home/background-home-tablet.jpg)',
                homeMobile: 'url(/src/assets/home/background-home-mobile.jpg)'
            },
            fontFamily: {
                sans: 'Barlow, sans-serif',
                mono: 'Bellefair, sans-serif'
            },
            colors: {
                gray: {
                    900: '#0B0D17',
                    400: '#D0D6F9'
                }
            }
        },
    },
    plugins: [],
}