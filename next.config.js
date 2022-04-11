module.exports = (phase, { defaultConfig }) => {
    /**
     * @type {import('next').NextConfig}
     */
    const nextConfig = {
        /* config options here */
        basePath: process.env.API_PREFIX,
    }
    return nextConfig
}