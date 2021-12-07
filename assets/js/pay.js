
const selectProvince = document.getElementById('province');
const selectDistrict = document.getElementById('district');
const selectWard = document.getElementById('ward');

// insert dữ liệ vào select province
let htmlOptionProvinces;
fetch(`./assets/data/provinces.json`)
.then(res => {
    const data = res.json();
    return data;
})
.then(data => {
    htmlOptionProvinces = data.map(item => `<option class="province-option" value="${item.code}">${item.name}</option>`);
    selectProvince.insertAdjacentHTML('beforeend', htmlOptionProvinces.join(''));
})
.catch(err => console.log(err))

// insert dữ liệu vào select quận huyện
let htmlOptionDistricts;
selectProvince.onchange = e => {
    selectWard.innerHTML = `<option class='ward-option' value="">Xã, phường</option>`;
    fetch(`./assets/data/districts.json`)
    .then(resp => resp.json())
    .then(data => {
        htmlOptionDistricts = data.map(item => {
            if(item.province_code == e.target.value) {
                return `<option class='district-option' value="${item.code}">${item.name}</option>`
            }
        })
        selectDistrict.innerHTML =`<option class='district-option' value="">Quận, huyện</option>${htmlOptionDistricts.join()}`;
    })
    .catch(err => console.log(err))
}

// insert dữ liệu vào select ward
let htmlOptionWards;
selectDistrict.onchange = e => {
    fetch(`./assets/data/wards.json`)
    .then(resp => resp.json())
    .then(data => {
        htmlOptionWards = data.map(item => {
            if(item.district_code == selectDistrict.value) {
                return `<option class='ward-option' value="${item.code}">${item.name}</option>`;
            }
        })
        selectWard.innerHTML = htmlOptionWards.join('');
    })
}