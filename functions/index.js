const functions = require("firebase-functions");
const bodyParser = require("body-parser");
const express = require("express");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const tm_words = ["Oracle", "Google", "Microsoft", "Amazon", "Deloitte"];

// POST API query. Send JSON string in body of request.
app.post("/sentence", (req, res) => {
  var reqSentence = req.body.sentence.toString();
  for (var i = 0; i < tm_words.length; i++) {
    if (reqSentence.includes(tm_words[i])) {
      // If trademark word starts with an upper case letter
      reqSentence = addTrademarkSymbol(reqSentence, tm_words[i]);
    } else if (reqSentence.includes(tm_words[i].toLowerCase())) {
      // If trademark word is all lower case
      reqSentence = addTrademarkSymbol(reqSentence, tm_words[i].toLowerCase());
    } else {
      // If trademark word is all upper case
      reqSentence = addTrademarkSymbol(reqSentence, tm_words[i].toUpperCase());
    }
  }

  // Output
  res.send(reqSentence);
});

// Function to add copyright symbol
function addTrademarkSymbol(sentence, word) {
  sentence = sentence.replace(word, `${word}©`);
  return sentence;
}

exports.app = functions.https.onRequest(app);
