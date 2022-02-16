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

let overly = document.getElementById("overly");
let closeModal = document.getElementById("closeModal");
let OpenModal = document.getElementById("OpenModal");

forEach((OpenModal) => {
    OpenModal.addEventListener('click', function(){
        overly.classList.remove('hidden');
        overly.classList.add('flex');
    })
});



closeModal.addEventListener('click', () =>{
    overly.classList.remove('flex');
    overly.classList.add('hidden');
})











