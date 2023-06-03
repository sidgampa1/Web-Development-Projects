const APILINK = 'https://api.themoviedb.org/3/discover/movie?page=1&sort_by=popularity.desc&api_key=84fd87b968aee1ad77848e7ffe07d299'
const IMGPATH = 'https://image.tmdb.org/t/p/w500';
const SEARCHAPI = 'https://api.themoviedb.org/3/search/movie?api_key=84fd87b968aee1ad77848e7ffe07d299&query=';

const main = document.getElementById("section");
const form = document.getElementById("form");
const search = document.getElementById("query");

returnMovies(APILINK);
function returnMovies(url) {
    fetch(url).then(res => res.json())
    .then(function(data) {
        console.log(data.results);
        data.results.forEach(element => {
            const div_card = document.createElement('div');
            div_card.setAttribute('class','card');

            const div_row = document.createElement('div');
            div_row.setAttribute('class','row');

            const div_col = document.createElement('div');
            div_col.setAttribute('class','column');

            const img = document.createElement('img');
            img.setAttribute('class','thumbnail');
            img.setAttribute('id','image');
            // img.setAttribute('alt','No Image');

            const title = document.createElement('h3');
            title.setAttribute('id','title');

            const center = document.createElement('center');

            title.innerHTML = `${element.title}<br><a href="movie.html?id=${element.id}&title=${element.title}">Reviews</a>`;
            img.src = IMGPATH + element.poster_path;
            
            center.appendChild(img);
            div_card.appendChild(center);
            div_card.appendChild(title);

            div_col.appendChild(div_card);
            div_row.appendChild(div_col);

            main.appendChild(div_row);

        })
    })
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    main.innerHTML = '';

    const searchItem = search.value;

    if(searchItem) {
        returnMovies(SEARCHAPI + searchItem);
        search.value = "";
    }
})