
$(document).ready(function() {
    
    let OpenModal = document.querySelectorAll(".OpenModal");
    let overly = document.getElementById("overly");
    let closeModal = document.getElementById("closeModal");

    for(let i=0; i<OpenModal.length; i++){
        OpenModal[i].onclick = function(){
            overly.classList.remove('hidden');
            overly.classList.add('flex');
        }
    };
        
    closeModal.onclick = () => {
        overly.classList.remove('flex');
        overly.classList.add('hidden');
    };


    let OpenModal2 = document.querySelector(".OpenModal2");
    let overly2 = document.getElementById("overly2");
    let closeModal2 = document.getElementById("closeModal2");

    OpenModal2.onclick = function(){
        console.log("hellow world")
        overly2.classList.remove('hidden');
        overly2.classList.add('flex');
        };

    closeModal2.onclick = () => {
        overly2.classList.remove('flex');
        overly2.classList.add('hidden');
    };

    let OpenModal3 = document.querySelector(".OpenModal3");
    let overly3 = document.getElementById("overly3");
    let closeModal3 = document.getElementById("closeModal3");

   
    OpenModal3.onclick = function(){
        overly3.classList.remove('hidden');
        overly3.classList.add('flex');
        }


    closeModal3.onclick = () =>{
    overly3.classList.remove('flex');
    overly3.classList.add('hidden');
    };

        
    window.onclick = function(event) {
        if (event.target == overly) {
            overly.classList.remove('flex');
            overly.classList.add('hidden');
        }  else if (event.target == overly2) {
            overly2.classList.remove('flex');
            overly2.classList.add('hidden');
        } else if(event.target == overly3) {
            overly3.classList.remove('flex');
            overly3.classList.add('hidden');
        }
    };
});
$(document).ready(function() {
    let mobileMenueBtn = document.querySelector('.mobileMenueBtn');
    let mobileMenue = document.getElementById('mobileMenue');
	mobileMenueBtn.onclick = () => {
        mobileMenue.classList.toggle('hidden');
        mobileMenueBtn.classList.toggle('rotate');
        mobileMenueBtn.classList.toggle('fixed');
    };
});

$(document).ready(function() {
    let mobileMenueBtnM = document.querySelector('.mobileMenueBtnM');
    let mobileMenueM = document.getElementById('mobileMenueM');
	mobileMenueBtnM.onclick = () => {
        mobileMenueM.classList.toggle('hidden');
        mobileMenueBtnM.classList.toggle('rotate');
        
    };
});

 // Abdou Us Modal
 $(document).ready(function() {
 let usOpenModal2 = document.querySelector(".usOpenModal2");
 let usoverly2 = document.getElementById("usoverly2");
 let uscloseModal2 = document.getElementById("uscloseModal2");

 usOpenModal2.onclick = function(){
     usoverly2.classList.remove('hidden');
     usoverly2.classList.add('flex');
     };

 uscloseModal2.onclick = () => {
     usoverly2.classList.remove('flex');
     usoverly2.classList.add('hidden');
 };

 let usOpenModal3 = document.querySelector(".usOpenModal3");
 let usoverly3 = document.getElementById("usoverly3");
 let uscloseModal3 = document.getElementById("uscloseModal3");


 usOpenModal3.onclick = function(){
     usoverly3.classList.remove('hidden');
     usoverly3.classList.add('flex');
     }


 uscloseModal3.onclick = () =>{
 usoverly3.classList.remove('flex');
 usoverly3.classList.add('hidden');
 };

 window.addEventListener(function(event) {
    if (event.target == usoverly) {
        usoverly.classList.remove('flex');
        usoverly.classList.add('hidden');
    }  else if (event.target == usoverly2) {
        usoverly2.classList.remove('flex');
        usoverly2.classList.add('hidden');
    } else if(event.target == usoverly3) {
        usoverly3.classList.remove('flex');
        usoverly3.classList.add('hidden');
    }
    });
});


$(document).ready(function() {

    let ul = document.querySelector('ul');
    let a = document.querySelectorAll('li a');
    let filter = document.querySelector('.myFilter');
    let filter2 = document.querySelector('.myFilter2');
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

    af.forEach(e => {
        e.addEventListener('click', function(){
            filter2.querySelector('.active2').classList.remove('active2');
            e.classList.add('active2');
        })
    });

    btn.forEach(e => {
        e.addEventListener('click', function(){
            conteiner.querySelector('.active1').classList.remove('active1');
            e.classList.add('active1');
        })
    });
});


let MworkshopFilter = document.querySelector('.mobile-workshop-filter');
let arrowBtn = document.querySelector('.arrowBtn');
let arrowDivBtn = document.querySelector('.arrowDivBtn');

arrowDivBtn.onclick = () => {
    console.log('filter')
    MworkshopFilter.classList.toggle('hidden');
    arrowBtn.classList.toggle('rotate-180')
    
};


$(document).ready(function(){
    $('li').click(function(){
        const value = $(this).attr('data-filter');
        if (value == 'all'){
            $('.itemBox').show('1000');
        }else {
            $('.itemBox').not('.'+value).hide('1000');
            $('.itemBox').filter('.'+value).show('1000');
        }
    });
});

