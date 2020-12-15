import { v4 as uuidv4 } from 'uuid';

function chillHop() {
    return [
        {
            name: "Slim Bobby",
            cover: "https://chillhop.com/wp-content/uploads/2020/10/23fdd99adc3e16abcb67b004ea3e748ebf433a49-1024x1024.jpg",
            artist: "Aviino",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=10448",
            color: ['#5881AB', '#72466A'],
            id: uuidv4(),
            active: true
        },
        {
            name: "Going Back",
            cover: "https://chillhop.com/wp-content/uploads/2020/10/737bb830d34592344eb4a2a1d2c006cdbfc811d9-1024x1024.jpg",
            artist: "Swørn",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=10310",
            color: ['#335561', '#2F436D'],
            id: uuidv4(),
            active: false
        },
        {
            name: "Hidden Structure",
            cover: "https://chillhop.com/wp-content/uploads/2020/09/88e7eb711f8c71d87fc102e97cf91e36f692348d-1024x1024.jpg",
            artist: "Leavv",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=9913",
            color: ['#C38963', '#9FD8B6'],
            id: uuidv4(),
            active: false
        },
        {
            name: "Colors Fade",
            cover: "https://chillhop.com/wp-content/uploads/2020/09/686808356b2bbc6a368e372ea604150bc346c788-1024x1024.jpg",
            artist: "Sleepy Fish",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=10023",
            color: ['#A1D1D3', '#3E859F'],
            id: uuidv4(),
            active: false
        },
    ]
}

export default chillHop;