const { removeSong, addSong } = require('./song');

describe('Given an array of songs and an index', () => {
    const sampleSongs = ['Oops I Did It Again', 'My Heart Go On', 'The Lion Sleeps Tonight'];
    const index = 0;
    const selectedSong = sampleSongs[index];
    describe('When removing a song at this index', () => {
        const newSampleSongs = removeSong(sampleSongs, index);
        it('Then array length should be decreased by one', () => {
            expect(newSampleSongs.length).toBe(sampleSongs.length - 1);
        });
        it('Then this index should not be contained in the array', () => {
            expect(newSampleSongs[index]).not.toBe(selectedSong);
        });
    })
});


describe.only('Given an array of songs and an song to add', () => {
    const sampleSongs = [ 
        {id:'1',title:'song1', singer:'singer1', words:'words1'},
        {id:'2',title:'song2', singer:'singer2', words:'words2'},
        {id:'3',title:'song3', singer:'singer3', words:'words3'},
        {id:'4',title:'song4', singer:'singer4', words:'words4'}
    ];

    const song = {id:'5',title:'song1', singer:'singer1', words:'words1'};
    describe('When adding a song to the array', () => {
        const newSampleSongs = addSong(sampleSongs, song);
        it('Then array length should be decreased by one', () => {
            expect(newSampleSongs.length).toBe(sampleSongs.length + 1);
        });
        it('Then this song should be contained in the array', () => {
            expect(newSampleSongs.indexOf(song).not.toBe(-1));
        });
    })
});
