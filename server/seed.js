import Database from "better-sqlite3";
const db = new Database("database.db");

// create song table
db.exec(`
    CREATE TABLE IF NOT EXISTS songs (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        artist TEXT NOT NULL,
        country TEXT NOT NULL,
        song_title TEXT NOT NULL,
        video TEXT NOT NULL
    )
`);

const insertSongs = db.prepare(`
    INSERT INTO songs (artist, country, song_title, video) VALUES (?, ?, ?, ?)
`);

// insertSong.run(
//     "country",
//     "song_title",
//     "artist",
//     "video"
//   );

insertSongs.run(
 "Albania",
  "Titan",
  "Besa",
  "https://www.youtube.com/embed/nrjFhjpm7D8?si=N-GtK3Exm0l5p-mA"
);

insertSongs.run(
  "Armenia",
  "Jako",
  "Ladaniva",
  "https://www.youtube.com/embed/_6xfmW0Fc40?si=9bOrFc7AofgtGXfJ"
);

insertSongs.run(
  "Australia",
  "One Milkali (One Blood)",
  "Electric Fields",
  "https://www.youtube.com/embed/tJ2IaHxCvdw?si=kiTFvZjrd1XDu5y3"
);

insertSongs.run(
  "Austria",
  "We Will Rave​",
  "Kaleen",
  "https://www.youtube.com/embed/Kqda15G4T-4?si=sjwhZUYDLLCRhM-5"
);

insertSongs.run(
  "Azerbaijan",
  "Özünlə Apar",
  "Fahree feat. Ilkin Dovlatov",
  "https://www.youtube.com/embed/NNhAk4rVgNc?si=DVHDr5nATk-y6d9s"
);

insertSongs.run(
  "Belgium",
  "Before the Party's Over",
  "Mustii",
  "https://www.youtube.com/embed/WCe9zrWEFNc?si=_JYVAH5e_vhAKb5e"
);

insertSongs.run(
  "Croatia",
  "Rim Tim Tagi Dim",
  "Baby Lasagna",
  "https://www.youtube.com/embed/EBsgTJQFl9k?si=2wHZOWta58Z8FtUU"
);

insertSongs.run(
  "Cyprus",
  "Liar",
  "Silia Kapsis",
  "https://www.youtube.com/embed/8q5QozrtEPA?si=1WTF5o-dyPn89YcO"
);

insertSongs.run(
  "Czechia",
  "Pedestal",
  "Aiko",
  "https://www.youtube.com/embed/_iTcX6NlAqA?si=tSaE6G9bshWtGU_S"
);

insertSongs.run(
  "Denmark",
  "Sand",
  "Saba",
  "https://www.youtube.com/embed/3pCtdFnv9eQ?si=RSad9hUtcJDfOA91"
);

insertSongs.run(
  "Estonia",
  "(nendest) narkootikumidest ei tea me (küll) midagi",
  "5miinust & Puuluup",
  "https://www.youtube.com/embed/zY6RbPaTNUc?si=ieH1sHn8fEJ6hsfW"
);

insertSongs.run(
  "Finland",
  "No Rules!",
  "Windows95man",
  "https://www.youtube.com/embed/8Wi7fhswoBA?si=yk9enhjpgBKUg48t"
);

insertSongs.run(
 "France",
 "Mon amour",
 "Slimane",
 "https://www.youtube.com/embed/tfoOop2HXxQ?si=tOHOb3jM_EiuImcy"
);

insertSongs.run(
 "Georgia",
 "Firefighter",
 " Nutsa Buzaladze",
 "https://www.youtube.com/embed/blMwY8Jabyk?si=q5tQsZaKxyKUIFnQ"
);

insertSongs.run(
  "Germany",
  "Always on the Run",
  "Isaak",
  "https://www.youtube.com/embed/twhq3S4YHdQ?si=DsNV3tkLXxbgHHZ3"
 );

 insertSongs.run(
  "Greece",
  "Zari",
  "Marina Satti",
  "https://www.youtube.com/embed/uTYalXf184A?si=4JYerxOaL4touiZu"
 );

 insertSongs.run(
  "Iceland",
  "Doomsday Blue",
  "Bambie Thug",
  "https://www.youtube.com/embed/ZGRXRrlIspY?si=cdAYFahTNvGiWUTw"
 );

 insertSongs.run(
   "Israel",
   "Hurricane",
   "Eden Golan",
   "https://www.youtube.com/embed/lJYn09tuPw4?si=aUHDE48atEZZ7p06"
 );

 insertSongs.run(
   "Italy",
   "La noia",
   "Angelina Mango",
   "https://www.youtube.com/embed/OKzWskcTTA8?si=dcms441WHu-5s1lB"
 );

 insertSongs.run(
  "Latvia",
  "Hollow",
  "Dons",
  "https://www.youtube.com/embed/8TIji6Ac8b4?si=WSQtqC5XAmAoDYhs"
 );

 insertSongs.run(
  "Lithuania",
  "Luktelk",
  "Silvester Belt",
  "https://www.youtube.com/embed/OrL668EQRu0?si=sAiN-GN2HSbD45l-"
 );

 insertSongs.run(
  "Luxembourg",
  "Fighter",
  "Tali",
  "https://www.youtube.com/embed/HV3sORfrREE?si=GF8IAK9OQvZ9yZ44"
 );

 insertSongs.run(
  "Malta",
  "Loop",
  "Sarah Bonnici",
  "https://www.youtube.com/embed/l6eS60n4wg8?si=h2lFYt7P69kGJZiE"
 );

 insertSongs.run(
  "Moldova",
  "In the Middle",
  "Natalia Barbu",
  "https://www.youtube.com/embed/Jom9sNL5whs?si=6wXy6NOzLnzH1Y2s"
);

insertSongs.run(
  "Netherlands",
  "Europapa",
  "Joost Klein",
  "https://www.youtube.com/embed/gT2wY0DjYGo?si=hWInTMmccx3q3ZA6"
);

insertSongs.run(
  "Norway",
  "Ulveham",
  "Gate",
  "https://www.youtube.com/embed/UipzszlJwRQ?si=x_HLelV9cLFmRc7x"
);

insertSongs.run(
  "Poland",
  "The Tower",
  "Luna",
  "https://www.youtube.com/embed/IhvDkF9XZx0?si=LL7ClTjhB_QALlWS"
);

insertSongs.run(
  "Portugal",
  "Grito",
  "Iolanda",
  "https://www.youtube.com/embed/K5wDGhcDSpQ?si=xRYQLFjsf0DYiSh6"
);

insertSongs.run(
  "San Marino",
  "11:11",
  "Megara",
  "https://www.youtube.com/embed/9NcAJtfhpWA?si=9yPsWo5GHyviAB_U"
);

insertSongs.run(
  "Serbia",
  "Ramonda",
  "Teya Dora",
  "https://www.youtube.com/embed/lWzPO6nPpwU?si=PcNa9tHnNEIWOpyL"
);

insertSongs.run(
  "Slovenia",
  "Veronika",
  "Raiven",
  "https://www.youtube.com/embed/uWcSsi7SliI?si=AWx1-VHkDKvgfBCO"
);

insertSongs.run(
  "Spain",
  "Zorra",
  "Nebulossa",
  "https://www.youtube.com/embed/zSZqlQZ0_us?si=6quKkVDKA7VxfYYJ"
);

insertSongs.run(
  "Sweden",
  "Unforgettable",
  "Marcus & Martinus",
  "https://www.youtube.com/embed/yekc8t0rJqA?si=U7cTmT2wOt43jgdA"
);

insertSongs.run(
  "Switzerland",
  "The Code",
  "Nemo",
  "https://www.youtube.com/embed/kiGDvM14Kwg?si=uuGDusTBVcrafnfO"
);

insertSongs.run(
  "Ukraine",
  "Teresa & Maria",
  "alyona alyona & Jerry Heil",
  "https://www.youtube.com/embed/k_8cNbF8FLI?si=Fo4fiUJo-mHD10bL"
);

insertSongs.run(
  "United Kingdom",
  "Dizzy",
  "Olly Alexander",
  "https://www.youtube.com/embed/mvs92WfR8lM?si=ozE_ZKb2p0ZgepjW"
);

db.exec(`
    CREATE TABLE IF NOT EXISTS messages (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        message TEXT
    )
`);

// Insert initial data into the messages table
const insertReview = db.prepare('INSERT INTO messages (name, message) VALUES (?, ?)');

insertReview.run("Tim", "This is amazing- I love Eurovision")
insertReview.run("Emma", "What a great entry from Iceland!")
insertReview.run("Dorian", "Wow")
insertReview.run("Bob", "Get in the bin")

console.log('Review added successfully.');