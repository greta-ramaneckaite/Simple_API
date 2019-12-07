const functions = require("firebase-functions");
const bodyParser = require("body-parser");
const express = require("express");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const tm_words = ["Oracle", "Google", "Microsoft", "Amazon", "Deloitte"];

app.post("/sentence", (req, res) => {
  var reqSentence = req.body.sentence.toString();
  for (var i = 0; i < tm_words.length; i++) {
    if (reqSentence.includes(tm_words[i].toString())) {
      reqSentence = reqSentence.replace(tm_words[i], `${tm_words[i]}©`);
    }
  }
  res.send(reqSentence);
});

exports.app = functions.https.onRequest(app);
