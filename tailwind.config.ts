@type {import('tailwindcss').Config}

module.exports = {
    content: [
        "./src/**/*.{html, ts, tsx}",
        "./public/index.html"
    ],
    theme: {
        extend: {
            screen: {
                'max-xs': {
                    'max': '479px'
                },
            },
        },
    },
    plugin: [],
}