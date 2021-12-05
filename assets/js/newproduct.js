
const btnBuys = document.querySelectorAll('.product__action-buy');
const formProductSize = document.querySelectorAll('.product__size');

[...btnBuys].forEach(btnBuy => {
    btnBuy.onclick = (e) => {
        [...formProductSize].forEach(form => {
            if (e.target.dataset.id == form.dataset.id) {
                form.submit();
            }
        })
    }
})
