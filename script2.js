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
            console.log(json.height)
           let height = json.height +"ft"
            displayHeight(height)
        })
        .catch(error => {
            console.log(error);
        })
}

function displayHeight(heightJson) {
    console.log(heightJson);
    let para = document.getElementById("height")
     para.innerText = heightJson
}

formSubmit.addEventListener('submit', pokemon);