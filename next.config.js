const config = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.css$/,
      use: 'raw-loader',
    })

    return config
  },
}

module.exports = {
  async headers() {
    return [
      {
        source: '/',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: 'https://www.google.com', // Sadece Google'dan gelen ziyaretçilere izin vermek için Google'ın ana sayfasını ekleyin
          },
        ],
      },
    ];
  },
};