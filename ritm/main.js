$(document).ready(function() {
    function burgerMenu(selector) {
        let menu = $(selector);
        let button = menu.find('.burger-menu__button');
        let links = menu.find('.burger-menu__link');
        let overlay = menu.find('.burger-menu__overlay');
    
        button.on('click', (e) => {
            e.preventDefault();
            toggleMenu();
        });
    
        links.on('click', () => toggleMenu());
        overlay.on('click', () => toggleMenu());
    
        function toggleMenu() {
            menu.toggleClass('burger-menu_active');
    
            if (menu.hasClass('burger-menu_active')) {
                $('body').css('overflow', 'hiden');
            } else {
                $('body').css('overflow', 'visible');
            }
        }
    }
    burgerMenu('.burger-menu');
    let windowCenter = document.documentElement.clientWidth;
    console.log(windowCenter);
    var linkText = document.querySelectorAll('a.link-text');
    var burgerMenu1 = document.querySelector('.burger-menu')
    var surcleLogo = document.querySelector('.surcle-logo')
    if (windowCenter < 1250) {
        linkText[0].style.display = 'none';
        linkText[1].style.display = 'none';
        linkText[2].style.display = 'none';
        linkText[3].style.display = 'none';
        burgerMenu1.style.display = 'flex';
        surcleLogo.style.bottom = '-550px';
    }
    else {
        linkText[0].style.display = 'inline-block';
        linkText[1].style.display = 'inline-block';
        linkText[2].style.display = 'inline-block';
        linkText[3].style.display = 'inline-block';
        burgerMenu1.style.display = 'none';
        surcleLogo.style.bottom = '5px';
    }
    window.addEventListener('resize', () => {
        let windowCenter = document.documentElement.clientWidth;
        console.log(windowCenter)
        if (windowCenter < 1250) {
            linkText[0].style.display = 'none';
            linkText[1].style.display = 'none';
            linkText[2].style.display = 'none';
            linkText[3].style.display = 'none';
            burgerMenu1.style.display = 'flex';
            surcleLogo.style.bottom = '-550px';
        }
        else {
            linkText[0].style.display = 'inline-block';
            linkText[1].style.display = 'inline-block';
            linkText[2].style.display = 'inline-block';
            linkText[3].style.display = 'inline-block';
            burgerMenu1.style.display = 'none';
            surcleLogo.style.bottom = '5px';
        }
    });
});