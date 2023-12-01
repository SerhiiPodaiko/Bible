/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
    reactStrictMode: true,
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')]
    },

    // SVG
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack']
        })

        return config
    },

    // Images link correct
    images: {
        remotePatterns: [
            // {
            //     protocol: 'https',
            //     hostname: 'i.dummyjson.com',
            //     port: '',
            //     pathname: '/data/products/**'
            // }
        ]
    },

    // Internationalization
    i18n: {
        locales: ['en-US', 'fr', 'nl-NL'],
        defaultLocale: 'en-US',
        domains: [
            {
                domain: 'example.com',
                defaultLocale: 'en-US',
            },
            {
                domain: 'example.nl',
                defaultLocale: 'nl-NL',
            },
            {
                domain: 'example.fr',
                defaultLocale: 'fr',
                http: true,
            },
        ],
    },
}

module.exports = nextConfig