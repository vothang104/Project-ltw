
// sự kiện nút help
const btnHelps = document.querySelectorAll('.btn__help');
const paragraphs = document.querySelectorAll('.detailproduct-left___help-content');
[...btnHelps].forEach(btnHelp => {
    btnHelp.onclick = e => {
        if(!e.target.classList.contains('btn__help--active')) {
            [...btnHelps].forEach(item => item.classList.toggle('btn__help--active'));
            [...paragraphs].forEach(item => item.style = `display: none`);
            [...paragraphs].find(para => para.dataset.id == e.target.dataset.id).style = `display: block`;
        }
    }
})
// sự kiện chuyển ảnh
const slide = document.querySelector('.detailproduct-left__slide');
const btnImgs = document.querySelectorAll('.detailproduct-left__slide-choose__img');
[...btnImgs].forEach(btnImg => {
    btnImg.onclick = e => {
        slide.style = `transform: translateX(-${e.target.dataset.distance * slide.clientWidth}px)`;
        [...btnImgs].forEach(item => item.classList.remove('active'));
        e.target.classList.add('active');
    }
})
// sự kiện chọn size
const labelSizes = document.querySelectorAll('.detailproduct-right__size-label');
const label = document.querySelector('.detailproduct-right__form-size');
[...labelSizes].forEach(labelSize => {
    labelSize.onclick = e => label.innerText = e.target.innerText;
})
// sự kiện nút tăng giảm số lượng
const inputNumber = document.getElementById('input-number')
const btnNumbers = document.querySelectorAll('.btn-number');
const labelNumber = document.querySelector('.input-number');
btnNumbers[0].onclick = e => {
    let number = Number(labelNumber.innerText);
    if(number > 1) {
        number--;
        labelNumber.innerText = number;
        inputNumber.value = number;
        console.log(inputNumber.value);
    }
}
btnNumbers[1].onclick = e => {
    let number = Number(labelNumber.innerText);
    number++;
    labelNumber.innerText = number;
    inputNumber.value = number;
    console.log(inputNumber.value);
}
// sự kiện bấm nút yêu thích
const toastParent = document.querySelector('.toast-wrap');
const btnLike = document.querySelector('.detailproduct-right__like');
const productName = document.querySelector('.detailproduct-right__name');
btnLike.onclick = e => {
        const toastEl = document.createElement('div');
        toastEl.classList.add('toast');
        const html = `      
            <div class="toast__icon">
                <i class="fas fa-check-circle"></i>
            </div>
            <p class="toast__message">
                Bạn đã thêm sản phẩm ${productName.innerText} vào yêu thích
            </p>
        `;
        toastEl.innerHTML = html;
        toastParent.insertAdjacentElement('afterbegin', toastEl);
        timeout = setTimeout(() => {
            toastParent.removeChild(toastEl);
        }, 2000);
}
// sự kiện bấm nút thêm vào giỏ hàng
const btnCart = document.querySelector('.btn.btn-cart');
btnCart.onclick = e => {
    const toastEl = document.createElement('div');
        toastEl.classList.add('toast');
        const html = `      
            <div class="toast__icon">
                <i class="fas fa-check-circle"></i>
            </div>
            <p class="toast__message">
                Bạn đã thêm sản phẩm ${productName.innerText} vào giỏ hàng thành công
            </p>
        `;
        toastEl.innerHTML = html;
        toastParent.insertAdjacentElement('afterbegin', toastEl);
        timeout = setTimeout(() => {
            toastParent.removeChild(toastEl);
        }, 2000);
}