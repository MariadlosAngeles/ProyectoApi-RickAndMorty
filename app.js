const URL="https://rickandmortyapi.com/api/character";
const container=document.querySelector('#card');

// const URLSearch="https://rickandmortyapi.com/api/character/?name=";
const characterSearch=document.querySelector('#search');

window.addEventListener('load',getCharacters());
characterSearch.addEventListener('keyup',getCharactersSearch);
console.log("entra aqui",getCharactersSearch());

function getCharacters(){
    fetch(URL)
    .then(response => response.json())
    .then(data => data.results.forEach(element =>{
        console.log(element);
        cards(element);
    })
)};

function cards(element){
    const card=document.createElement('div');
    card.classList='card';

    const name=document.createElement('h2');
    name.textContent=element.name;
    
    name.classList='tits';
    card.appendChild(name);

    const images=document.createElement('img');
    images.setAttribute('src',element.image);
    images.textContent=element.image;

    images.classList='img';
    card.appendChild(images);

    const values=document.createElement('div');
    values.textContent=element.values;

    values.classList='values';
    card.appendChild(values);

    container.appendChild(card);
}


function getCharactersSearch(){
    let inputValue = document.querySelector("#search").value;
    const newURL=(URL+`/?name=${inputValue}`);
    fetch(newURL )
    .then(response => response.json())
    .then(data=> {
        search();
        data.results.forEach(element => {
            cards(element)
        });
    })
}

function search(){
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }   
}





