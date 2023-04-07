const ghostElephant = document.querySelector(".elephantImage_ghost");
const firstContainer = document.querySelector(".first-container");

window.onscroll = () => {
    if (window.scrollY > firstContainer.getBoundingClientRect().bottom) {
        ghostElephant.classList.remove('hide');
    } else {
        ghostElephant.classList.add('hide');
    }
};