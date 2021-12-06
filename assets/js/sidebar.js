let isRotate = false;

const icons = document.querySelectorAll('.sidebar__category-icon');
[...icons].forEach(icon => {
    icon.onclick = e => {
        if(e.target.style.transform != `rotateZ(180deg)`) {
            e.target.style = `transform: rotateZ(180deg);
                            transform-origin: 50% 75%;`
            e.target.parentNode.nextElementSibling.style = `display: block`;
        }else {
            e.target.style = `transform: rotateZ(0);
                            transform-origin: 50% 75%;`
            e.target.parentNode.nextElementSibling.style = `display: none`;
        }
    }
})
// sublist sublist
const icon2s = document.querySelectorAll('.sidebar__category-icon2');
[...icon2s].forEach(icon => {
    icon.onclick = e => {
        if(e.target.style.transform != `rotateZ(180deg)`) {
            e.target.style = `transform: rotateZ(180deg);
                            transform-origin: 50% 75%;`
            e.target.parentNode.nextElementSibling.style = `display: block`;
        }else {
            e.target.style = `transform: rotateZ(0);
                            transform-origin: 50% 75%;`
            e.target.parentNode.nextElementSibling.style = `display: none`;
        }
    }
})
// toggle
const toggles = document.querySelectorAll('.toggle');
[...toggles].forEach(toggle => {
    toggle.onclick = e => {
        if( e.target.firstElementChild.style.left != `100%` && e.target.firstElementChild.style.transform != `translateX(-100%)`) {
            e.target.style = `background-color: var(--orange)`;
            e.target.firstElementChild.style = `left: 100%; transform: translateX(-100%)`;
        }else {
            e.target.style = `background-color: #ccc`;
            e.target.firstElementChild.style = `left: 0`;
        }
    }
})