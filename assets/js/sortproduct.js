// sự kiện click vào sort item
const sortList = document.querySelector('.sort-product__list');
const sortItems = document.querySelectorAll('.sort-product__item');
const sortMove = document.querySelector('.sort-product__list-move');
const underline = document.querySelector('.underline');

[...sortItems].forEach(sortItem => {
    sortItem.onclick = e => {
        [...sortItems].forEach(item => item.classList.remove('active'));
        e.target.classList.add('active');
        const elementBoundingFirst = sortItems[0].getBoundingClientRect();
        const elementBounding = e.target.getBoundingClientRect();
        const distance1 = elementBoundingFirst.left;
        const distance2 = elementBounding.left;
        underline.style = 'display: none';
        sortMove.style = `width: ${elementBounding.width}px;
                            transform: translate(${distance2 - distance1}px, 1px);`;
    }
})
