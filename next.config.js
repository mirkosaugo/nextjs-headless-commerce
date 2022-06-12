const path = require('path')



const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    additionalData: '@import "assets/scss/config.scss";'
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Important: return the modified config
    return config
  },
}

module.exports = nextConfig
