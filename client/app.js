const songWrapper = document.getElementById("songWrapper");

// get the songs from my api
async function getSongs() {
  const response = await fetch("http://localhost:8080/songs");
  const songs = await response.json();
  console.log(songs);

  // put the songs onto the page
  songs.forEach(function (song) {
    // DOM manipulation to put the songs onto the html
    const h2 = document.createElement("h2");
    const p = document.createElement("p");
      const video = document.createElement("iframe");
      video.setAttribute("src", song.video)
      console.log(song)

    h2.textContent = song.song_title;
    songWrapper.appendChild(h2);
    songWrapper.appendChild(h2);
    songWrapper.appendChild(video);
  });
}

getSongs();

const messagesList = document.getElementById("messagesList");

// Get messages from the API
async function getMessages() {
    const response = await fetch("http://localhost:8080/messages"); // Change to Render SERVER URL before submitting
    const messages = await response.json();
console.log(messages)


    // Iterate through the messages and append them to the list
    messages.forEach(function (message) {
      // Create elements for message display
      const li = document.createElement("li");
      const namePara = document.createElement("p"); 
      const p = document.createElement("p");

      // Set the text content of the paragraph to the message text
      namePara.textContent = message.name; 
      p.textContent = message.message; 
console.log(p.textContent);


      // Append the paragraph to the list item
      li.appendChild(namePara);
      li.appendChild(p);
      

      // Append the list item to the messages list
      messagesList.appendChild(li);
      messagesList.appendChild(li);
    });
  }

// Event listener for form submission
document.getElementById("messageForm").addEventListener("submit", async (event) => {
  event.preventDefault();

  // Get the message from the input field
  const nameInput = document.getElementById("nameInput");
  const yourName = event.target.name.value; // CHANGED - ADDED event.target.yourName
  const messageInput = document.getElementById("messageInput");
  const message = event.target.message.value; // CHANGED - ADDED event.target.message
  console.log({nameInput, messageInput, yourName, message}) 


    // Send the message to the API - // replace with Render URL at the end before submission
    await fetch("http://localhost:8080/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: yourName, message:message}), // add more input into curly braces - DONE?
    });

// Fetch messages when the page loads
getMessages();
  })