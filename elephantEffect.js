const ghostElephant = document.querySelector(".elephantImage_ghost");
const firstContainer = document.querySelector(".first-container");

window.onscroll = () => {
    if (window.scrollY > firstContainer.getBoundingClientRect().top) {
        ghostElephant.classList.remove('hide');
    } else {
        ghostElephant.classList.add('hide');
    }
};