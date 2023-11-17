

interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    autor: string;
    año: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        autor: "Ed Sheeran",
        año: 2015
    }
}

// const {
//     song:another_song, 
//     songDuration:duration, 
//     details
// } = audioPlayer;

// const {
//     autor, 
//     año
// } = details;

// console.log('Song: ', another_song, duration, ' Detalles: ', autor, año)

const [p1, p2, p3 = 'not found'] : string[] = ['Goku','Vegeta'];

console.log('Personaje3: ', p3)



export{};