var playlist = {
  bob_dylan: "Girl From the North Country"
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}
