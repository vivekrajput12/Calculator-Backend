const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const calRoute  =  require('./routes/calRoutes.js')
app.use(bodyParser.json());
const cors = require('cors');
// app.use(
//     cors({
//       origin: "http://localhost:5173",
//       credentials: true,
//     })
//   );
app.use(
    cors({
      origin: "http://localhost:5173",
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
      exposedHeaders: ["Content-Length", "Authorization"],
      credentials: true,
    })
  );
app.get("/" , function(req,res){
    res.send("helo")
    console.log('server')
});
app.use("/beckend/cal" , calRoute);
app.listen(8000);    