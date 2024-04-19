const songWrapper = document.getElementById("songWrapper");

// get the songs from my api
async function getSongs() {
  const response = await fetch("http://localhost:8080/songs");
  const songs = await response.json();
  console.log(songs);

  // put the songs onto the page
  songs.forEach(function (song) {
    // DOM manipulation to put the songs onto the html
    const div = document.createElement("div");
    const h2 = document.createElement("h2");
    const p = document.createElement("p");
    const video = document.createElement("iframe");
    video.setAttribute("src", song.video);
    console.log(song);
// For the video header
    h2.textContent =
      h2.textContent = `${song.country}- ${song.artist}-  ${song.song_title}`;
    div.appendChild(h2);
    div.appendChild(p);
    div.appendChild(video);
    div.classList.add("video");
    songWrapper.appendChild(div);
  });
}

getSongs();

const messagesList = document.getElementById("messagesList");

// Get messages from the API
async function getMessages() {
  const response = await fetch("http://localhost:8080/messages"); // Change to Render SERVER URL before submitting
  const messages = await response.json();
  console.log(messages);

  messages.forEach(function (message) {
    // Create elements for message display
    const li = document.createElement("li");
    const namePara = document.createElement("p");
    const messagePara = document.createElement("p");
    const countryPara = document.createElement("p");
    const opinionPara = document.createElement("p");

    // Set the text content of the paragraph to the message text
    namePara.textContent = message.name;
    messagePara.textContent = `Message:${message.message}`;
    countryPara.textContent = `Country:${message.country}`;
    opinionPara.textContent = `Opinion:${message.opinion}`;

    // Append the paragraph to the list item
    li.appendChild(namePara);
    li.appendChild(messagePara);
    li.appendChild(countryPara);
    li.appendChild(opinionPara);

    // Append the list item to the messages list
    messagesList.appendChild(li);
    messagesList.appendChild(li);
    messagesList.appendChild(li);
    messagesList.appendChild(li);
  });
}

// Event listener for form submission
document
  .getElementById("messageForm")
  .addEventListener("submit", async (event) => {
    event.preventDefault();

    // Get the message from the input field
    const nameInput = document.getElementById("nameInput");
    const yourName = event.target.name.value; // CHANGED - ADDED event.target.yourName
    const messageInput = document.getElementById("messageInput");
    const message = event.target.message.value;
    const countryVote = document.getElementById("review");
    const vote = event.target.review.value;
    const opinionInput = document.getElementById("opinion"); // CHANGED - ADDED event.target.message
    const opinion = event.target.opinion.value;

    console.log({ nameInput, messageInput, yourName, message, opinion, vote });

    // Send the message to the API - // replace with Render URL at the end before submission
    await fetch("http://localhost:8080/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: yourName,
        message: message,
        country: vote,
        opinion: opinion,
      }), 
    });

    // Fetch messages when the page loads
    getMessages();
    messageForm.reset();
  });
