//==========
// Cards output and EventListener for Like button and likes increment
let movies = JSON.parse(movieDB);
var outputID = 0; // to track the different output lines

for (let i of movies) { // in this loop I print all Bootstrap cards
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

    //as you'll see below, I added 
    
    outputID++; // I'm sure there is a more elegant way to adress the correct output element- but to proceed to the increment logic, I leave here
    // currently the confusion in my head makes it hard to remember the correct methods
    
  
};

function outputLikes (n) { // In case of a click, I increment movies[n].likes and output the line at n => outputID element
    movies[n].likes++;     
    document.getElementById(n).innerHTML = "Likes " + movies[n].likes;  
};

for (let i in movies) { // adding eventListener to all buttons. To distinguish between the buttons, I assigned the movies.Id as the button element ID ;)
    document.getElementById(movies[i].Id).addEventListener("click", function (){outputLikes(i)});
    // I tried to assign the EventListener in a loop where I go through an array of getElementsByClassName items - but I always ended 
    // up with an error ".addEventListener is not a function"

};

//==============
// Ratings logic

var myModal = new bootstrap.Modal(document.getElementById("ratingsModal"));

function showHighestRating () {
    let index = 0, highestRating = 0;
    for (o = 0; o < movies.length; o++) {
        if (highestRating < movies[o].likes) {
            highestRating = movies[o].likes;
            index = o;
        }
    }
    // console.log(index + " Index");
    document.getElementById("modal_body").innerHTML = "The movie with the highest rating with " + movies[index].likes + " likes is " + movies[index].movieName + `<img src="${movies[index].image}" class="card-img" alt="...">`;
    myModal.show();
};

document.getElementById("rating_button").addEventListener("click",showHighestRating);


//********************************************************************************* */
// Vertical Card in Bootstrap
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