function removeSong(songs, index) {
    let newSongs;
    newSongs = [...songs]; // clone
    newSongs.splice(index, 1);
    return newSongs;
}

function addSong(songs,songsDetails){
    const newSongs = [...songs];
    const { id, title, singer, words } = songsDetails;
    const song = { id, title, singer, words };
    if(!id || !title || !singer || !words)
        return -1;
    if(newSongs.indexOf(song) !== -1)
        return -1;
    newSongs.push(song);
    return newSongs;
}

module.exports = {
    removeSong,
    addSong
}