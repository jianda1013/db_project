const validate = require('../validate');
module.exports = (app) => {
    require('./page')(app);
    require('./user')(app, validate)
    require('./pokemon')(app, validate)
}