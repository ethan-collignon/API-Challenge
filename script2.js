let formSubmit = document.querySelector('form');
let searchMe = document.querySelector('.pokeName')



function pokemon(e) {
    e.preventDefault()
    let pokeName = document.getElementById("pokeName").value
    console.log(searchMe)
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
        .then(function (response) {
            console.log(response);
            return response.json();
        })
        .then(function (json) {
            console.log(json.height,json.id,json.weight);
            displayData(json)
        })
        .catch(error => {
            console.log(error);
        })
}

function displayData(json) {
    let height = json.height;
    let id = json.id;
    let weight = json.weight;

    let para = document.getElementById("height")
     para.innerText = height

    let para2 = document.getElementById("id")
    para2.innerText = id

    let para3 = document.getElementById("weight")
    para3.innerText = weight
}

formSubmit.addEventListener('submit', pokemon);