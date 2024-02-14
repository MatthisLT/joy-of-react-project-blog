/** @type {import('next').NextConfig} */

module.exports = {
  experimental: {
    outputFileTracingIncludes: {
      '/*': ['./content/**/*'],
    },
  },
  reactStrictMode: true,
};
