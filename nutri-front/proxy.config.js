const proxy = [
    {
      context: '/api',
      target: 'https://www.nutri-stats.herokuapp.com',
      pathRewrite: {'^/api' : ''}
    }
  ];
  module.exports = proxy;
  