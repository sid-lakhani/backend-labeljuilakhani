module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: 'https://cms.labeljuilakhani.in',
  admin: { autoOpen: false },
  app: {
    keys: env.array('APP_KEYS'),
  },
});
