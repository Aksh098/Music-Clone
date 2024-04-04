window.addEventListener('scroll', function(){

    let navbar = document.getElementById('nav');

    if(window.pageYOffset >= 144){
        navbar.classList.add('sticky');
    }else{
        navbar.classList.remove('sticky');
    }
});