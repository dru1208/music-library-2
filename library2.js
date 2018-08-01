var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },
  "printPlaylists": function () {
                    for (var a in this["playlists"]) {
                      console.log(a + ": " + this["playlists"][a]["name"] + " - " + this["playlists"][a]["tracks"].length + " tracks")
                    }
                  },
  "printTracks" : function () {
                    for (var b in this["tracks"]) {
                      console.log(b + ": " + this["tracks"][b]["name"], "by", this["tracks"][b]["artist"], "(" + this["tracks"][b]["album"] + ")");
                    }
                  },
  "printPlaylist": function (playlistId) {
                    console.log(`${playlistId}: ${this["playlists"][playlistId]["name"]} - ${this["playlists"][playlistId]["tracks"].length} tracks`);
                    var trackLoop = this["playlists"][playlistId]["tracks"]
                    for (var c = 0; c < trackLoop.length; c ++) {
                      console.log(`${trackLoop[c]}: ${this["tracks"][trackLoop[c]]["name"]} by ${this["tracks"][trackLoop[c]]["artist"]} (${this["tracks"][trackLoop[c]]["album"]})`);
                    }
                  },
  "addTrackToPlaylist": function (trackId, playlistId) {
                          this["playlists"][playlistId]["tracks"].push(trackId);
                        },
  "add Track": function (name, artist, album) {
                  var newTId = uid();
                  tlist[`${newTId}`] = {
                    "id": `${newTId}`,
                    "name": name,
                    "artist": artist,
                    "album": album
                  }
                },
  "addPlaylist": function (name) {
                  var newPId = uid();
                  plist[`${newPId}`] = {
                    "id": `${newPId}`,
                    "name": name,
                    "tracks": []
                  }
                }
}


library["printPlaylists"]();
library["printTracks"]();
library["printPlaylist"]("p01");


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {
  var ans = []
  var ans = query.search();

}