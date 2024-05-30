import { cookies } from "next/headers";

export async function GET(request: Request) {
  console.log("\nIN THE BACKEND\n");

  const rurl = request.url.toString();

  const url = new URL(rurl);
  const args = new URLSearchParams(url.search);

  const id = args.get("id");
  const token = args.get("token");

  //Get the user's playlists
  const playlists = await fetch(
    `https://api.spotify.com/v1/users/${id}/playlists`,
    {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  const playlistJSON = await playlists.json();

  let playlistLinks = [];

  //Want name, description, uri, id for each playlist
  //Get links of each playlist
  for (let i = 0; i < playlistJSON.items.length; i++) {
    let item = playlistJSON.items[i];
    playlistLinks.push(item.href);
  }

  console.log(playlistLinks);

  //Empty array of playlists
  let userPlaylists = [];

  //For each playlist link, obtain playlist data

  for (let i = 0; i < 5; i++) {
    //Lets get data on fewer playlists
    const playlistData = await fetch(playlistLinks[i], {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });

    const PJSON = await playlistData.json();

    let playlist = {};

    playlist.name = PJSON.name;
    playlist.spotify_id = PJSON.id;
    playlist.description = PJSON.description;
    playlist.tracks = [];

    //For each track in the playlist, gather track data
    for (let j = 0; j < PJSON.tracks.items.length; j++) {
      let currentTrack = PJSON.tracks.items[j];

      if (currentTrack.track === null) {
        console.log(
          "A track in playlist: " + playlistLinks[i] + " Was skipped."
        );
        continue;
      }
      //TODO: There are issues with the album property or the PJSON.tracks.items...
      //The track is null in some cases lol, if track = null, skip
      try {
        let albumName = currentTrack.track.album.name;
        let albumID = currentTrack.track.album.id;
        let externalIds = currentTrack.track.external_ids;
        let trackNumber = currentTrack.track.track_number;
        let trackId = currentTrack.track.id;
        let trackName = currentTrack.track.name;

        let trackObj = {
          album: {
            albumName: albumName,
            albumId: albumID,
          },
          externalIds: externalIds,
          trackNumber: trackNumber,
          trackId: trackId,
          trackName: trackName,
        };

        playlist.tracks.push(trackObj);
      } catch (e) {
        console.log("Problem playlist: " + playlistLinks[i]);
        console.error(e);
        console.log(e);
      }
    }
    userPlaylists.push(playlist);
  }

  const res = new Response(JSON.stringify(userPlaylists), { status: 200 });

  return res;
}
