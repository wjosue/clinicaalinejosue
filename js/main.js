// mobile nav

const mobileNav = document.querySelector('.mnav');
const closeBtn = document.querySelector('.mnav__close-btn');
const closeBtnIcn = document.querySelector('.mnav__close-btn-icon');

const navOpenedClass = 'left-0';
const navClosedClass = '-left-[300px]';
const arrowLeftClass = 'ri-arrow-left-s-line';
const arrowRightClass = 'ri-arrow-right-s-line';

closeBtn.addEventListener('click', () => {
    if(mobileNav.classList.contains(navClosedClass)){
        mobileNav.classList.toggle(navOpenedClass);

        closeBtnIcn.classList.toggle(arrowLeftClass);
        closeBtnIcn.classList.toggle(arrowRightClass);
    }
});


// Swiper
const swiper = new Swiper('.swiper', {

    loop: true,
    autoHeight: true,
    autoplay: {
        delay: 5000,
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },


});

//faq
const faqItems = document.querySelectorAll('.faq__item');
faqItems.forEach(item => {
    const faqBtn = item.querySelector('.faq__btn');

    item.addEventListener('click', () => {
        const isOpen = item.classList.toggle('open');
        const iconClass = isOpen ? 'ri-subtrack-fill' : 'ri-add-fill';
        const iconElement = faqBtn.querySelector('i');
        iconElement.classList = `${iconClass} text-2xl`;
    });
});

//scroll reveal animations
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '60px',
    duration: 3000,
    delay: 500,
});

//hero
sr.reveal('.hero__text', {origin: 'top'});
sr.reveal('.hero__img');

//stats
sr.reveal('.stats__item', {
    delay: 500,
    distance: '100px',
    interval: 100,
    origin: 'top'
});

//services
sr.reveal('.services');
sr.reveal('.services__top');
sr.reveal('.services__item',{
    delay: 500,
    distance: '100px',
    interval: 100,
    origin: 'bottom'
});

//appoinments
sr.reveal('.appointment__title');
sr.reveal('.calendly-inline-widget');

//testimonials
sr.reveal('.testimonial');
sr.reveal('.testimonial__constainer');

//team
sr.reveal('.team__title',{
    origin: 'left',
});
sr.reveal('.team__slider',{
    origin: 'left',
});

//faq
sr.reveal('.faq__title');
sr.reveal('.faq__item', {
    delay: 500,
    distance: '100px',
    interval: 100,
    origin: 'bottom'
});

//departaments
sr.reveal('.departaments__bg');
sr.reveal('.departaments__container');

//blog
sr.reveal('.blog__title');
sr.reveal('.blog__post', {
    delay: 500,
    distance: '100px',
    interval: 100,
    origin: 'bottom'
});

//brands
sr.reveal('.brands__logo', {
    delay: 500,
    distance: '100px',
    interval: 100,
    origin: 'bottom'
});

sr.reveal('.newsletter');
sr.reveal('.newsletter__container');


//footer
sr.reveal('.footer__item', {
    delay: 500,
    distance: '100px',
    interval: 100,
    origin: 'bottom'
});