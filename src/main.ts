import copy from 'copy-to-clipboard';
import htmx from 'htmx.org';

function copyWithToast(element: HTMLElement, toastId: string) {
    copy(element.textContent!.trim());
    const toast = document.getElementById(toastId);
    if (toast) {
        toast.classList.remove('opacity-0');
        toast.classList.add('opacity-100');
        setTimeout(() => {
            toast.classList.remove('opacity-100');
            toast.classList.add('opacity-0');
        }, 4000);
    }
}

(window as any).copyWithToast = copyWithToast;
(window as any).htmx = htmx;

// // Function to initialize Swiper carousel
// function initializeSwiper() {
//     const swiperContainer = document.querySelector('.workshop-carousel');
//     if (swiperContainer) {
//         console.log('Swiper container found, initializing...');

//         const swiper = new Swiper('.workshop-carousel', {
//             modules: [Navigation, Pagination, Autoplay],
//             slidesPerView: 1,
//             spaceBetween: 30,
//             loop: true,
//             autoplay: {
//                 delay: 3000,
//                 disableOnInteraction: false,
//             },
//             pagination: {
//                 el: '.swiper-pagination',
//                 clickable: true,
//                 dynamicBullets: true,
//             },
//             navigation: {
//                 nextEl: '.swiper-button-next',
//                 prevEl: '.swiper-button-prev',
//             },
//             breakpoints: {
//                 640: {
//                     slidesPerView: 1,
//                     spaceBetween: 20,
//                 },
//                 768: {
//                     slidesPerView: 2,
//                     spaceBetween: 30,
//                 },
//                 1024: {
//                     slidesPerView: 3,
//                     spaceBetween: 30,
//                 },
//             },
//         });

//         console.log('Swiper initialized:', swiper);
//         return swiper;
//     } else {
//         console.log('Swiper container not found');
//         return null;
//     }
// }

// // Initialize Swiper on DOM load (in case content is already there)
// document.addEventListener('DOMContentLoaded', function() {
//     initializeSwiper();
// });

// // Initialize Swiper after HTMX content is loaded
// document.addEventListener('htmx:afterSettle', function() {
//     console.log('HTMX content settled, checking for Swiper...');
//     initializeSwiper();
// });
