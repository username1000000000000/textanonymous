const express = require("express");
const cors = require("cors");
const app = express();
const bodyparser = require('body-parser');
app.use(express.json());
app.use(cors());
app.use(bodyparser.urlencoded({extended: true}));

app.post("/sendmessage", (req, res) => {
const accountSid = 'api sid';
const authToken = 'api token'
const client = require('twilio')(accountSid, authToken);
const numTo = req.body.numberTo;
const numFrom = req.body.numberFrom;
const mess = req.body.message;

client.messages
  .create({
     body: mess,
     from: '+19546377080',
     to: numTo
   })
  .then(message => console.log(message.sid));
});
app.get("/", (req, res) => {
    res.send("working");
 
});
app.listen(5000, () => {
console.log("it works")

})
