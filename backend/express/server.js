const express = require('express')
require('dotenv').config()
const app = express();
app.use(express.json({ limit: '200mb' }));
app.use(express.urlencoded({extended:true}));
// app.get('/sol',(req,res)=>{
//   res.send({
//     message:"hello sol"
//   })
// })
app.get('/', (req, res) => {
  res.send({
    message: "hello world"
  })
})
app.get('/event/payment',(req,res)=>{
  res.send({
    message:"hello event"
  })
})
app.post('/:route', (req, res) => {
  try {
console.log("jhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh");
  console.log("from here");
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

// server {
//   listen 80 default_server;
//   listen [::]:80 default_server;

//   # SSL coindex index.html index.htm index.nginx-debian.html;
// #
//   server_name _;

//   location / {
//           # First attempt to serve request as file, then
//           # as directory, then fall back to displaying a 404.
// #               try_files $uri $uri/ =404;
//                 #proxy_pass http://127.0.0.1:5003/2-hbnb;
//                 proxy_pass http://127.0.0.1:3000
//   }

//   location /airbnb-onepage {
//      proxy_pass      http://127.0.0.1:5000;
//  }
//   location ~ /airbnb-dynamic/number_odd_or_even/(\d+)$ {
//       proxy_pass   http://127.0.0.1:5001/number_odd_or_even/$1;
//       }
// location /api {
//   proxy_pass http://127.0.0.1:5002/api;
// }
// location /static {
//   proxy_pass http://127.0.0.1:5003;
// }


// }
