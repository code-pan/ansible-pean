/**
 * Configuration and environment variables for the pm2 daemon.
 *
 * Usage: `pm2 start server.config.js` or `pm2 startOrReload server.config.js --update-env`
 */
module.exports = {
  apps: [{
    name: 'app-server',
    script: './src/server.js',
    cwd: '/home/{{app_user}}/{{app_dir}}/',
    env: {
      APP_MODES: 'admin,user',
      DATABASE_URL: 'postgres://{{db_user}}:{{db_pass}}@localhost/{{db_name}}',
      EMAIL_PASS: 'XXX',
      EMAIL_SERVICE: 'XXX',
      EMAIL_USER: 'XXX',
      FACEBOOK_APP_ID: 'XXX',
      FACEBOOK_APP_SECRET: 'XXX',
      FRONTEND_URL: 'XXX',
      GOOGLE_CLIENT_ID: 'XXX',
      GOOGLE_CLIENT_SECRET: 'XXX',
      GOOGLE_PUBLIC_KEY: 'XXX',
      GOOGLE_SERVER_KEY: 'XXX',
      NODE_ENV: 'XXX',
      NODE_URL: '{{app_url}}',
      PORT: 5000,
      //REDIS_URL: '',
      S3_ACCESS_KEY: 'XXX',
      S3_BUCKET: 'XXX',
      S3_SECRET_KEY: 'XXX',
    }
  }]
}
