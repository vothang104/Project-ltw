// sự kiện thêm vào giỏ hàng
const btnCarts = document.querySelectorAll('.product__action-cart');
const productNames = document.querySelectorAll('.product__name');
const toastWrap = document.querySelector('.toast-wrap');

[...btnCarts].forEach(btn => {
    btn.onclick = e => {
        // xử lí hiện toast message thông báo
        const id = e.target.dataset.id;
        const productName = [...productNames].find(p => {
            return p.dataset.id == id;
        })
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
        toastWrap.insertAdjacentElement('afterbegin', toastEl);
        timeout = setTimeout(() => {
            toastWrap.removeChild(toastEl);
        }, 2000);
    }
})