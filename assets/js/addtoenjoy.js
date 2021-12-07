
const labelNames = document.querySelectorAll('.product__name');
const btnLikes = document.querySelectorAll('.prouct__action-like');
const toastBounding = document.querySelector('.toast-wrap');

[...btnLikes].forEach(btnLike => {
    btnLike.onclick = e => {
        const p = [...labelNames].find(labelName => labelName.dataset.id == e.target.dataset.id);
        const toastEl = document.createElement('div');
        toastEl.classList.add('toast');
        const html = `      
            <div class="toast__icon">
                <i class="fas fa-check-circle"></i>
            </div>
            <p class="toast__message">
                Bạn đã thêm sản phẩm ${p.innerText} vào yêu thích
            </p>
        `;
        toastEl.innerHTML = html;
        toastBounding.insertAdjacentElement('afterbegin', toastEl);
        timeout = setTimeout(() => {
            toastBounding.removeChild(toastEl);
        }, 2000);
    }
})