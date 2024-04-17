import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

// connect to the database.db file (normally this would be "connect to the database that is hosted elsewhere")
import Database from "better-sqlite3";
const db = new Database("database.db"); // go and get the existing db file

app.get("/", function (request, response) {
  response.json("You are looking at my root route. How roude.");
});

app.get("/songs", function (request, response) {
  // here we use .all instead of .run because we aren't INSERTing, but selecting. So we want to see ALL the results
  try {
    const songs = db.prepare("SELECT * FROM songs").all();
  response.json(songs);
  } catch (error) {
    response.status(500).json({ error : error })
}
});

app.listen(8080, function () {
  console.log("HAHAHAH... 8080");
});
// GET
app.get("/", function (request, response) {
  console.log("/ is called");
  response.json("This is the get response");
});

app.get('/messages', function (request, response) { 
  const messages = db.prepare('SELECT * FROM messages').all();
  response.json(messages);
});


// POST

app.post('/messages', (request, response) => {
  //Take the data from the form (body) 
const newMessage = request.body;
console.log(newMessage); // Added console log

  // Data goes into the database 
  db.prepare ('INSERT INTO messages (name, message) VALUES (?,?)').run(newMessage.name, newMessage.message); // Reflected structure from seed file
  response.json({ message: 'Message added successfully' });
});