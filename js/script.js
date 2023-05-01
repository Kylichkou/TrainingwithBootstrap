window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.nav-menu'),
    menuItem = document.querySelectorAll('.nav-menu__list-item'),
    hamburger = document.querySelector('.hamburger');
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('nav-menu_active');
    });
    // spans.forEach(item => {
    //     item.classList.toggle("notransition");
    // });
    menuItem.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('nav-menu_active');
        });
    }); 
});
$(document).ready(function(){
            $("#menu").on("click","a", function (event) {
                event.preventDefault();
                var id  = $(this).attr('href'),
                //узнаем высоту от начала страницы до блока на который ссылается якорь
                    top = $(id).offset().top;
                //анимируем переход на расстояние - top за 1500 мс
                $('body,html').animate({scrollTop: top}, 1500);
            });
        });