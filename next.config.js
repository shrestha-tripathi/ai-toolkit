const withPWA = require('next-pwa')({
    dest: 'public',
    register: true,
    skipWaiting: true,
    // disable: process.env.NODE_ENV === 'development'
})

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            "oaidalleapiprodscus.blob.core.windows.net"
        ]
    }
}

module.exports = withPWA(nextConfig);

