const axios = require('axios')
const path = require('path');
const express = require('express');
const mysql = require("mysql");
const bodyParser = require('body-parser');
const db = require('./db.js');
const cors = require('cors');

const config = {
  baseURL: `http://api:${process.env.PORT_REST}`,
  headers: { Authorization: null }
}


module.exports = (app) => {
  // const con = mysql.createConnection({
  //   host: process.env.MYSQL_HOST,
  //   port: process.env.MYSQL_PORT,
  //   user: process.env.MYSQL_USER,
  //   password: process.env.MYSQL_PASSWORD,
  //   database: process.env.MYSQL_DATABASE
  // });
  // con.connect(function(err){
  //   if(err) throw err;
  //   console.log('success');
  // });
  // con.query('select 12+14 as result', function(err, rows, fields){
  //   if (err) throw err;
  //   console.log('The result is: ', rows[0].result);
  // });
  
  // con.end();

  // app.use(express.static('/usr/src/app/public'));
  
  // app.set('view engine', 'html');
  // app.engine('html', require('ejs').renderFile);
  app.set('view engine', 'ejs');
  app.use(cors());



  app.get('/', function (req, res, next) {
    res.render('index', { title: '寶可夢集集樂' });
  });
  app.get('/users', function (req, res, next) {
    res.send('respond with a resource');
  });

  // get, (post, put) => body,
  //   delete => query

  app.get('/testing', async (req, res) => {
    await axios.get('/', { ...config })
    await axios.post('/health', { body: "body" }, { ...config, params: { query: "query" } }).then(result => console.log(result.data))
    res.send('ok');
  })

  
  app.get('/bookList', async (req, res) => {
    res.render('bookList', {
      name: 'H'
    });
  })
  // app.get('/bookList', async (req, res) => {
  //   axios.get('/pokemon?ID=1')
  //     .then(function (response) {
  //       console.log(response);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // })
  // app.get('/bookList', async (req, res) => {
  //   let sql = 'select count(*) from pokemon';
  //   let data = null;
  //   db.base(sql, data, (results) => {
  //     console.log(results);
  //   });
  // })

  app.get('/operation', async (req, res) => {
    res.render('operation');
  })

  app.get('/backbagList', async (req, res) => {
    res.render('backbagList');
  })

  app.get('/choose', async (req, res) => {
    res.render('choose');
  })

  app.get('/explore', async (req, res) => {
    res.render('explore');
  })

  app.get('/gym', async (req, res) => {
    res.render('gym');
  })

  app.get('/store', async (req, res) => {
    res.render('store');
  })

  app.get('/main', async (req, res) => {
    res.render('main');
  })

  app.get('/bookList', async(req, res) => {
    const data = await axios.get('/pokemon',{
      ...config
    })
    console.log(data);
  })

  
  
}
