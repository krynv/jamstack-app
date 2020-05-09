module.exports = {
  env: {
    AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
    AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
    AUTH0_CLIENT_SECRET: process.env.AUTH0_CLIENT_SECRET,
    REDIRECT_URI:
      process.env.REDIRECT_URI || "http://localhost:3000/api/callback",
    POST_LOGOUT_REDIRECT_URI:
      process.env.POST_LOGOUT_REDIRECT_URI || "http://localhost:3000/",
    SESSION_COOKIE_SECRET: process.env.SESSION_COOKIE_SECRET,
    SESSION_COOKIE_LIFETIME: 7200,
    API_AUDIENCE: "https://jamstackapp-api/",
    AUTH0_SCOPE: "openid profile offline_access read:favourites",
    API_BASE_URL: "http://localhost:4000",
    CLD_CLOUD_NAME: "dcgrlda2p",
  },
};
