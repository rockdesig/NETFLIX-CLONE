const movies =[{
    "name": "The Boys",
    "imdb": 9.3,
    "date": "2022",
    "sposter": "img/the boys.jpg",
    "bposter": "img/the boys1.jpg",
    "genre": "Action",
    "type": "series",
    "url": "the boys.html",
    "trailer": "john wick.webm",
    "low": "video/theboys.webm",
    "medium": "video/the boys 720ph.mp4",
    "high": "video/the boys 1080ph.mp4"
}, {
    "name": "Money Heist",
    "imdb": 9.9,
    "date": "2020",
    "sposter": "img/money heist.jpg",
    "bposter": "img/money heist1.jpg",
    "genre": "Action",
    "type": "series",
    "url": "money heist.html",
    "trailer": "money heist trailer.mp4",
    "low": "video/money heist 480ph.mp4",
    "medium": "video/money heist 720ph.mp4",
    "high": "video/money heist 1080ph.mp4"
}, {
    "name": "John Wick",
    "imdb": 9.8,
    "date": "2022",
    "sposter": "img/Jhon Wick.jpg",
    "bposter": "img/jhon wick1.webp",
    "genre": "Action",
    "type": "movie",
    "url": "jhon wick.html",
    "trailer": "john wick trailer.mp4",
    "low": "video/Jhon Wick 480ph.mp4",
    "medium": "video/Jhon Wick 720ph.mp4",
    "high": "video/Jhon Wick 1080ph.mp4"
}, {
    "name": "Ant Man",
    "imdb": 8.9,
    "date": "2017",
    "sposter": "img/ant man.jpg",
    "bposter": "img/ant man1.jpg",
    "genre": "Action",
    "type": "movie",
    "url": "ant man.html",
    "trailer": "john wick trailer.mp4",
    "low": "video/ant man 480ph.mp4",
    "medium": "video/ant man 720ph.mp4",
    "high": "video/ant man 1080ph.mp4"
}, {
    "name": "Avengers",
    "imdb": 9.9,
    "date": "2012",
    "sposter": "img/avengers.jpg",
    "bposter": "img/avengers1.jpg",
    "genre": "Action",
    "type": "movie",
    "url": "avengers.html",
    "trailer": "john wick trailer.mp4",
    "low": "video/avengers 480ph.mp4",
    "medium": "video/avengers 720ph.mp4",
    "high": "video/avengers 1080ph.mp4"
}, {
    "name": "Moon Knight",
    "imdb": 7.3,
    "date": "2022",
    "sposter": "img/moon knight.jpg",
    "bposter": "img/moon knight1.webp",
    "genre": "Action",
    "type": "series",
    "url": "moon knight.html",
    "trailer": "john wick trailer.mp4",
    "low": "video/moon knight 480ph.mp4",
    "medium": "video/moon knight 720ph.mp4",
    "high": "video/moon knight 1080ph.mp4"
}, {
    "name": "Kota Factory",
    "imdb": 9.6,
    "date": "2020",
    "sposter": "img/kota factory.jpg",
    "bposter": "img/kota factory1.webp",
    "genre": "Action",
    "type": "series",
    "url": "kota factory.html",
    "trailer": "john wick trailer.mp4",
    "low": "video/kota factory 480ph.mp4",
    "medium": "video/kota factory 720ph.mp4",
    "high": "video/kota factory 1080ph.mp4"
},
 ]

let left_btn = document.getElementsByClassName('arrow-l')[0];
let right_btn = document.getElementsByClassName('arrow-r')[0];
let cards = document.getElementsByClassName('cards')[0];

left_btn.addEventListener('click',  () => {
        cards.scrollLeft -= 140;
    })

right_btn.addEventListener('click',  () => {
        cards.scrollRight += 190;
    })


    let json_url = "movies";
    fetch(json_url).then(Response => Response.movies())
    .then((data) => console.log(data));
     console.log(movies)