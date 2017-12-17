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
      ref  : 'origin/master',
      repo : 'git@github.com:HouXingYi/mysite_indexPage.git',
      path : '/www/indexPage',
      'ssh_options': "StrictHostKeyChecking=no",
      'post-deploy' : "npm install && pm2 startOrRestart ecosystem.json --env production",
      'env': {
          "NODE_NEV": "production"
      }
    },
  }
};
