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
      path : '/houxingyi/www/indexPage',
      'ssh_options': "StrictHostKeyChecking=no",
      'post-deploy' : "npm install && pm2 startOrRestart ecosystem.json --env production",
      'env': {
          "NODE_NEV": "production"
      }
    },
  }
};
