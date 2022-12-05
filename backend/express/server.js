const express = require('express')
require('dotenv').config()
const app = express();
app.use(express.json({ limit: '200mb' }));
app.use(express.urlencoded({extended:true}));
app.post('/:route', (req, res) => {
  try {
  const handler = require(`./handler/${req.params.route}`);
  if (!handler) {
      return res.status(400).json({
        message: 'not found'
      })
    }
    handler(req, res);
  }
  catch (e) {
    console.log(e);
    return res.status(400).json({
      message: 'unexpected error occured'
    })
  }
})
app.post('/event/:route', (req, res) => {
  try {
    console.log("from here");
  const handler = require(`./events/${req.params.route}`);
  if (!handler) {
      return res.status(400).json({
        message: 'not found'
      })
    }
    handler(req, res);
  }
  catch (e) {
    console.log(e);
    return res.status(400).json({
      message: 'unexpected error occured'
    })
  }
})
app.listen(3000,
  () => {
    console.log("on the moon")
  }
);
