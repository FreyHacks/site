const rewrites = async () => {
  return [
    {
      source: '/sb.js',
      destination: 'https://cdn.splitbee.io/sb.js'
    },
    {
      source: '/_hive/:slug',
      destination: 'https://hive.splitbee.io/:slug'
    }
  ];
};

module.exports = {
  rewrites,
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '',
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: (config, { dev, isServer }) => {
    // Replace React with Preact only in client production build
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat',
      });
    }

    return config;
  },
}
