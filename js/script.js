"use strict"

document.addEventListener("click", documentActions);

function documentActions(e) {
    const targetElement = e.target;

    if (targetElement.closest('.icon-menu')) {             /*step 2*/
        document.documentElement.classList.toggle('menu-open');     /*создаем класс menu-open*/
    }

    if (targetElement.closest('[data-goto]')) {
        document.documentElement.classList.contains('menu-open') ?              /*при выборе пункта меню закрывается*/
            document.documentElement.classList.remove('menu-open') : null;      /*при выборе пункта меню закрывается*/
        const goTo = targetElement.closest('[data-goto]').dataset.goto;
        const goToElement = document.querySelector(goTo);
        const headerHeight = document.querySelector('.header').offsetHeight;

        if (goToElement) {
            window.scrollTo({
                top: goToElement.offsetTop - (headerHeight + 15),
                behavior: "smooth"
            });
        }
        e.preventDefault();         /*На этом моменте уже работают ссылки меню*/
    }
    //tabs
    if (targetElement.closest('.nav_item')) {
        const tabNavItem = targetElement.closest('.nav_item');
        if (!tabNavItem.classList.contains('active')) {
            const activeTabNavItem = document.querySelector('.nav_item.active');
            activeTabNavItem.classList.remove('active');
            tabNavItem.classList.add('active');

            const tabItems = document.querySelectorAll('.members_tab');
            const activeTabItems = document.querySelector('.members_tab.active');

            activeTabItems.classList.remove('active');
            tabItems[getIndex(tabNavItem)].classList.add('active');
        }
    }
    
    function getIndex(el) {
        return Array.from(el.parentNode.children).indexOf(el);
    }

}

let searchForm = document.querySelector('.header_form-input');

document.querySelector('.search_icon').onclick = () => {
    searchForm.classList.toggle('active');
    
}
window.onscroll = () => {
    searchForm.classList.remove('active');
}

