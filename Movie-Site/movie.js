const APILINK = "https://movie-server-n9k8.onrender.com";

const main = document.getElementById("section");

const url = new URL(location.href);
const title = url.searchParams.get("title");
const movieID = url.searchParams.get("id");

console.log(url);
console.log(title);

main.innerHTML = `<h2>Reviews for: </h2><br><h3>${title}</h3>`;

const div_new = document.createElement('div');
div_new.innerHTML = `
<div class="row" class="new"> 
    <div class="column"> 
        <div class="card"> 
            New Review
            <p><strong>Review: </strong>
                <input type="text" id="new_review">
            </p>
            <p><strong>User: </strong>
                <input type="text" id="new_user">
            </p>
            <p>
                <a href=# onclick="saveReview('new_review', 'new_user')">💾</a>
            </p>
    </div>
</div>
`;

main.appendChild(div_new);

returnMovies(APILINK);

function returnMovies(url) {
    fetch(url + "/movie/" + movieID).then(res => res.json())
    .then(function(data) {
        console.log(data);
        data.forEach(review => {
            const div_card = document.createElement('div');

            div_card.innerHTML = `
            <div class="row" id=${review._id}> 
                <div class="column"> 
                    <div class="card"> 
                    <p><strong>Review: </strong>${review.review}</p>
                    <p><strong>User: </strong>${review.user}</p>
                    <p>
                    <a href=# onclick="editReview('${review._id}', '${review.user}', '${review.review}')"> ✏️</a>
                    <a href=# onclick="deleteReview('${review._id}')">🗑️</a>
                    </p>
                </div>
            </div>
        </div>`;

            main.appendChild(div_card);

        })
    })
}

function editReview(id, user, review) {
    console.log("Editing review");
    console.log(id);
    const element = document.getElementById(id);
    const userID = "user" + id;
    const reviewID = "review" + id;

    element.innerHTML = `
    <div class="column"> 
        <div class="card"> 
    <p><strong>Review: </strong>
        <input type="text" id="${reviewID}" value="${review}">
    </p>
    <p><strong>User: </strong>
        <input type="text" id="${userID}" value="${user}">
    </p>
    <p>
        <a href=# onclick="saveReview('${reviewID}', '${userID}', '${id}')">💾</a>
        <a href=# onclick="updateReview('${review}', '${user}', '${id}')">❌</a>
    </p>
    </div>
    </div>
    `;
}

async function saveReview(reviewID, userID, id="") {
    const review = document.getElementById(reviewID).value;
    const user = document.getElementById(userID).value;
    var data = {
        user: user,
        review: review
    };
    var method = "PUT"

    if (!id) {
        id = "new";
        method = "POST";
        data.movieID = movieID
    }

    const url = APILINK + "/" + id;

    const response = await fetch(url, {
        method: method,
        headers: {
            "accept": "application/json, text/plain, */*",
            "content-type": "application/json"
        },
        body: JSON.stringify(data)
    }).then(res => res.json()).then(data => {
        console.log(data);
        location.reload(); //TODO could make this just add a new review if new, or update saved review, instead of reloading all reviews
    });

}

async function updateReview(review, user, id) {
    const element = document.getElementById(id);
    element.innerHTML = `
    <div class="column"> 
    <div class="card"> 
    <p><strong>Review: </strong>${review}</p>
    <p><strong>User: </strong>${user}</p>
    <p>
    <a href=# onclick="editReview('${id}', '${user}', '${review}')"> ✏️</a>
    <a href=# onclick="deleteReview('${id}')">🗑️</a>
    </p>
    </div>
    </div>
`;  
}

async function deleteReview(id) {
    const response = await fetch(APILINK + "/" + id, {
        method: "DELETE"
    }).then(res => res.json()).then(data => {
        console.log(data);
        const child = document.getElementById(id);
        child.parentElement.remove();   
    });
}

