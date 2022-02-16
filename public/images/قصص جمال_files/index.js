let ul = document.querySelector('ul');
let a = document.querySelectorAll('li a');
let filter = document.querySelector('.myFilter');
let af = document.querySelectorAll('ul li');
let conteiner = document.querySelector('.myDIV');
let btn = document.querySelectorAll('.btn');

a.forEach(e => {
    e.addEventListener('click', function(){
        ul.querySelector('.active').classList.remove('active');
        e.classList.add('active');
    })
});

af.forEach(e => {
    e.addEventListener('click', function(){
        filter.querySelector('.active2').classList.remove('active2');
        e.classList.add('active2');
    })
});

btn.forEach(e => {
    e.addEventListener('click', function(){
        conteiner.querySelector('.active1').classList.remove('active1');
        e.classList.add('active1');
    })
});

$(document).ready(function(){
    $('li').click(function(){
        const value = $(this).attr('data-filter');
        if (value == 'all'){
            $('.itemBox').show('1000');
        }else {
            $('.itemBox').not('.'+value).hide('1000');
            $('.itemBox').filter('.'+value).show('1000');
        }
    })
})

let OpenModal = document.querySelectorAll(".OpenModal");
let overly = document.getElementById("overly");
let closeModal = document.getElementById("closeModal");

let OpenModal2 = document.querySelectorAll(".OpenModal2");
let overly2 = document.getElementById("overly2");
let closeModal2 = document.getElementById("closeModal2");

let OpenModal3 = document.querySelectorAll(".OpenModal3");
let overly3 = document.getElementById("overly3");
let closeModal3 = document.getElementById("closeModal3");

for(let i=0; i<OpenModal.length; i++){
    OpenModal[i].addEventListener('click', function(){
        overly.classList.remove('hidden');
        overly.classList.add('flex');
    })
} 
    
closeModal.addEventListener('click', () =>{
    overly.classList.remove('flex');
    overly.classList.add('hidden');
})
    
window.onclick = function(event) {
    if (event.target == overly) {
        overly.classList.remove('flex');
        overly.classList.add('hidden');
    }  else if (event.target == overly2) {
        overly2.classList.remove('flex');
        overly2.classList.add('hidden');
    } else if( event.target == overly3) {
        overly3.classList.remove('flex');
        overly3.classList.add('hidden');
    }
}

for(let i=0; i<OpenModal2.length; i++){
    OpenModal2[i].addEventListener('click', function(){
        overly2.classList.remove('hidden');
        overly2.classList.add('flex');
    })
} 
    
closeModal2.addEventListener('click', () =>{
    overly2.classList.remove('flex');
    overly2.classList.add('hidden');
})
    

for(let i=0; i<OpenModal3.length; i++){
    OpenModal3[i].addEventListener('click', function(){
        overly3.classList.remove('hidden');
        overly3.classList.add('flex');
    })
} 
    
closeModal3.addEventListener('click', () =>{
    overly3.classList.remove('flex');
    overly3.classList.add('hidden');
})
    


let mobileMenueBtn = document.querySelector('.mobileMenueBtn');
let mobileMenue = document.querySelector('.mobileMenue');


mobileMenueBtn.addEventListener('click', () => {
    mobileMenue.classList.toggle('hidden');
    mobileMenueBtn.classList.toggle('rotate')
}); 

let searchIcon = document.querySelector('.searchIcon');

searchIcon.addEventListener('click', () => {
    searchBar.classList.toggle('hidden');
})
