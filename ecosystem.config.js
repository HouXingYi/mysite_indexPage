module.exports = {
  apps : [
    {
      name      : 'indexPage',
      script    : 'app.js',
      env: {
        COMMON_VARIABLE: 'true'
      },
      env_production : {
        NODE_ENV: 'production'
      }
    },
  ],
  deploy : {
    production : {
      user : 'houxingyi',
      host : '47.254.26.35',
      port : '3999',
      ref  : 'origin/master',
      repo : 'git@houxingyi:houxingyi/mysite_indexPage.git',
      path : '/www/indexPage',
      'ssh_options': "StrictHostKeyChecking=no",
      'post-deploy' : "cnpm install express && pm2 startOrRestart ecosystem.config.js --env production",
      'env': {
          "NODE_NEV": "production"
      }
    },
  }
};
