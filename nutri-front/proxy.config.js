const proxy = [
    {
      context: '/api',
      target: 'https://localhost:3030',
      //pathRewrite: {'^/api' : ''}
      "sercure": false
    }
  ];
  module.exports = proxy;
  