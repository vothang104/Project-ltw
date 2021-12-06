
const btnBuys = document.querySelectorAll('.product__action-buy');
const formProductSize = document.querySelectorAll('.product__size');

// [...btnBuys].forEach(btnBuy => {
//     btnBuy.onclick = (e) => {
//         form = [...formProductSize].find(item => {
//             return item.dataset.id == e.target.dataset.id;
//         })
//         form.submit();
//     }
// })
[...btnBuys].forEach(btnBuy => {
    btnBuy.onclick = e => {
        [...formProductSize].find(item => item.dataset.id == e.target.dataset.id).submit();
    }
})
