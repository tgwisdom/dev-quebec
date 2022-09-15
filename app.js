const express = require('express')
const path = require('node:path')
const bodyParser = require('body-parser')

const app = express()
const {MongoClient} = require('mongodb');
const client = new MongoClient(uri);

await listDatabases(client);

try {
  await client.connect();

  await listDatabases(client);

} catch (e) {
  console.error(e);
}

finally {
  await client.close();
}

main().catch(console.error);



app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'ejs');


let userName = "Joelzzzzz"; 
let thatData = ""; 

async function main() {
	// we'll add code here soon
}

app.get('/', function (req, res) {
    // res.sendFile(path.join(__dirname, "index.html" )); 
    // res.send('Hello ' + userName + ' from Node/Express/Heroku');
    // res.send(`Hello ${userName} from Node/Express/Heroku with Backticks!`)

    res.render('index', 
      { 
        userName: userName
      }
      );

})


app.post("/saveToNode", (req, res) => {
  console.log(req.body);
  console.group(req.body.userName);
  res.render('index', { userName: req.body.userName });

})

app.listen(process.env.PORT || 3000,
  () => console.log("Server is running..."));
