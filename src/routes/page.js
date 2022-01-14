const path = require('path');

module.exports = (app) => {
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, `/../../dist/index.html`))
    });

    app.get('/choose', (req, res) => {
        res.sendFile(path.join(__dirname, `/../../dist/choose.html`))
    });

    app.get('/booklist', (req, res) => {
        res.sendFile(path.join(__dirname, `/../../dist/bookList.html`))
    });

    app.get('/operation', (req, res) => {
        res.sendFile(path.join(__dirname, `/../../dist/operation.html`))
    });
}