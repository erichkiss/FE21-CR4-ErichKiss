let movies = JSON.parse(movieDB);
var j = 0;
var outputID = 0;

// console.log(movies);
// movies[0].likes++;
// console.log(movies[0].likes);


for (let i of movies) {
    document.getElementById("viewCards").innerHTML += ` 
                                                    <div id="movies_div" class="card m-1 col-lg-6 col-md-6 " style="max-width: 540px;">
                                                        <div class="row no-gutters">
                                                            <div class="col-md-4">
                                                                <img src="${i.image}" class="card-img" alt="...">
                                                            </div>
                                                            <div class="col-md-8">
                                                            <div class="card-body">
                                                                <h5 class="card-title">${i.movieName}</h5>
                                                                <h6 class="card-title">${i.year}</h6>
                                                                <p class="card-text">${i.description}</p>
                                                                <p id="${outputID}"class="card-text">Likes ${i.likes}</p>
                                                                <a id="${i.Id}" class="btn btn-primary">Like</a>
                                                            </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    `;

    // console.log(i.Id);
    outputID++;
    // console.log("ID" + outputID);
};

function outputLikes (n) {
    movies[n].likes++;
    for (l = 0; l < movies.length; l++) {
        document.getElementById(l).innerHTML = "Likes " + movies[l].likes;
    }
};

for (let i in movies) {
    document.getElementById(movies[i].Id).addEventListener("click", function (){outputLikes(i)});
};




// let outputfield = 0;

// for (let i of movies) {
//     document.getElementById(i.Id).addEventListener("click", function(){incrementLikes(outputfield)});
//     outputfield++;
// };

// function incrementLikes (x) {
//     console.log(x);
//     movies[x].likes++;
//     // console.log(movies[x].likes);
//     // document.getElementById(x).innerHTML = `${movies[x].likes}`;
// };

// var buttons = document.getElementsByClassName("like_button");
// // console.log(buttons);

// function incrementLikes() {
//     console.log("hurra");
// };

// for (let j in buttons) {
//     console.log(buttons[j]);
//     buttons[j].addEventListener("click",function(){incrementLikes(j)});
// };



// buttons.addEventListener("click", incrementLikes);



//loop doesnt work

// var buttons = document.getElementsByClassName("like_button");

// function incrementLikes() {
//     //     movies[0].likes++;
// };

// for (let j in buttons) {
//     console.log(buttons[j]);
//     buttons[j].addEventListener("click",incrementLikes);
// };






// Vertical Card 
// <div id="main_div" class="col-lg-4 col-md-6 ${i.Id}">
//         <div class="card">
//         <img src="${i.image}" class="card-img-top" alt="...">
//         <div class="card-body">
//             <h4 id="${i.Id}" class="card-title">${i.movieName}</h4>
//             <h6 class="card-title">${i.year}</h6>
//             <p class="card-text">${i.description}</p>
//             <p class="card-text">Likes ${i.likes}</p>
//             <a href="#" class="btn btn-primary">Buy</a>
//         </div>                                                       
//     </div>
// </div>                                                                                                        