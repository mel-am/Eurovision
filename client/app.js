const songWrapper = document.getElementById("song");

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

    h2.textContent =h2.textContent = `${song.country}- ${ song.artist }-  ${song.song_title}`;
    // p.textContent = `This is ${}`;
    // img.src = game.imgUrl;
    // img.alt = game.title;
    songWrapper.appendChild(h2);
    songWrapper.appendChild(h2);
    songWrapper.appendChild(video);
  });
}

getSongs();
