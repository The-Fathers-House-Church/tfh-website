/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    SESSION_NAME: 'TFH Web',
    SESSION_KEY: 'TFH_WEB_USER',
    // API_URL: 'https://www.goldenogbeka.com/api/v2',
    API_URL: 'http://localhost:5000/api/v2',
    API_KEY: 'TFH_ADMIN',
    YOUTUBE_API_KEY: 'AIzaSyCf4VkVCwGCJDeXFQiFzZKqCXhyORMmOHI',
    YOUTUBE_UPLOAD_KEY: 'UUHqYDhxS7MAD22cwuR1yvAw',
    YOUTUBE_CHANNEL_ID: 'UCHqYDhxS7MAD22cwuR1yvAw',
  },
  images: {
    domains: ['i.ytimg.com', 'res.cloudinary.com', 'images.unsplash.com'],
  },
};

module.exports = nextConfig;
