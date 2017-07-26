var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//newly added route
app.get("/webhook", function (req, res) {
  if (req.query["hub.verify_token"] === "my-chat-bot") {
    res.status(200).send(req.query["hub.challenge"]);
  } else {
    res.sendStatus(403);
  }
});
app.listen(port, function () {
  console.log('Example app listening on port: '+ port)
});
