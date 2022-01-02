module.exports = (app) => {
  app.get('/', function (req, res, next) {
    res.render('index', { title: '寶可夢集集樂' });
  });
  app.get('/users', function (req, res, next) {
    res.send('respond with a resource');
  });
}

