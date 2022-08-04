/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.tsx'],
    theme: {
        keyframes: {
            show: {
                '0%': { transform: 'translate(10%, 0)' },
                '100%': { transform: 'translate(0, 0)' },
            }
        },
        animation: {
            'show-sidebar': 'show .5s forwards',
        },
        screens: {
            'tablet': '375px',
            'sm': '400px',
            'medium': '667px',
            'desktop': '768px',
            'xl': '1220px'
        },
        extend: {
            backgroundImage: {
                homeDestkop: 'url(/src/assets/home/background-home-desktop.jpg)',
                homeTablet: 'url(/src/assets/home/background-home-tablet.jpg)',
                homeMobile: 'url(/src/assets/home/background-home-mobile.jpg)',
                destinationDestkotp: 'url(/src/assets/destination/background-destination-desktop.jpg)',
                destinationTablet: 'url(/src/assets/destination/background-destination-tablet.jpg)',
                destinationMobile: 'url(/src/assets/destination/background-destination-mobile.jpg)',
                crewDesktop: 'url(/src/assets/crew/background-crew-desktop.jpg)',
                crewTablet: 'url(/src/assets/crew/background-crew-tablet.jpg)',
                crewMobile: 'url(/src/assets/crew/background-crew-mobile.jpg)',
                technologyDesktop: 'url(/src/assets/technology/background-technology-desktop.jpg)',
                technologyTablet: 'url(/src/assets/technology/background-technology-tablet.jpg)',
                technologyMobile: 'url(/src/assets/technology/background-technology-mobile.jpg)',
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