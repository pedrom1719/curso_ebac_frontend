document.addEventListener("DOMContentLoaded", function() {
    let navButton =  document.querySelectorAll('.nav__menu__item');

    navButton.forEach(function(i){
        i.addEventListener('click', function(){
            i.parentNode.querySelector('.nav__menu__item--active').classList.remove('nav__menu__item--active');
            i.classList.add('nav__menu__item--active');

        });
    });

    
});