/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    SESSION_NAME: 'TFH Web',
    SESSION_KEY: 'TFH_WEB_USER',
    // API_URL: 'https://www.goldenogbeka.com/api/v2',
    API_URL: 'http://localhost:5000/api/v2',
    API_KEY: 'TFH_ADMIN',
    YOUTUBE_API_KEY: 'AIzaSyBR2Wg2mC2BTHj0ONibXzPyNpnhL2Egjxg',
    YOUTUBE_UPLOAD_KEY: 'UU4jT_fVaY8Yf_FkWaDphPPg',
    YOUTUBE_CHANNEL_ID: 'UC4jT_fVaY8Yf_FkWaDphPPg',
  },
  images: {
    domains: ['i.ytimg.com', 'res.cloudinary.com'],
  },
};

module.exports = nextConfig;
