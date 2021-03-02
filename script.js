let navbarBurger = document.querySelector('.navbar-burger');
let navbarMenu = document.querySelector('.navbar-menu');

navbarBurger.addEventListener('click', () => {
    navbarBurger.classList.toggle('is-active');
    navbarMenu.classList.toggle('is-active');
})

let filters = document.querySelectorAll('button.filters');
let tools = document.querySelectorAll('div.is-parent');

let tags = [];

for (let i = 0; i < tools.length; i++) {
    tags.push(Array.from(tools[i].classList));
}


filters[0].addEventListener('click', ()=> {
    let filter = 'alcance';
    for (let i = 0; i < tools.length; i++) {
        if (!(tags[i].indexOf(filter) === -1)) {
            tools[i].style.display = 'flex'
        } else {   if (tags[i].indexOf(filter) === -1){
            tools[i].style.display = 'none';
        }};
    }
    console.log ('Working');
})

filters[1].addEventListener('click', ()=> {
    let filter = 'calidad';
    for (let i = 0; i < tools.length; i++) {
        if (!(tags[i].indexOf(filter) === -1)) {
            tools[i].style.display = 'flex'
        } else {   if (tags[i].indexOf(filter) === -1){
            tools[i].style.display = 'none';
        }};
    }
    console.log ('Working');
})

filters[2].addEventListener('click', ()=> {
    let filter = 'comunicacion';
    for (let i = 0; i < tools.length; i++) {
        if (!(tags[i].indexOf(filter) === -1)) {
            tools[i].style.display = 'flex'
        } else {   if (tags[i].indexOf(filter) === -1){
            tools[i].style.display = 'none';
        }};
    }
    console.log ('Working');
})

filters[3].addEventListener('click', ()=> {
    let filter = 'riesgo';
    for (let i = 0; i < tools.length; i++) {
        if (!(tags[i].indexOf(filter) === -1)) {
            tools[i].style.display = 'flex'
        } else {   if (tags[i].indexOf(filter) === -1){
            tools[i].style.display = 'none';
        }};
    }
    console.log ('Working');
})

filters[4].addEventListener('click', ()=> {
    let filter = 'interesados';
    for (let i = 0; i < tools.length; i++) {
        if (!(tags[i].indexOf(filter) === -1)) {
            tools[i].style.display = 'flex'
        } else {   if (tags[i].indexOf(filter) === -1){
            tools[i].style.display = 'none';
        }};
    }
    console.log ('Working');
})

filters[5].addEventListener('click', ()=> {
    let filter = 'tile';
    for (let i = 0; i < tools.length; i++) {
        if (!(tags[i].indexOf(filter) === -1)) {
            tools[i].style.display = 'flex'
        } else {   if (tags[i].indexOf(filter) === -1){
            tools[i].style.display = 'none';
        }};
    }
    console.log ('Working');
})