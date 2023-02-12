const btns = document.querySelector('#button_s');
const input = document.querySelector('.form_input');
const add_btn = document.querySelector('.add_b');
const del_btn = document.querySelector('.clear_b');
const list = document.querySelector('.top_l');

// submit uchun holat
btns.addEventListener('submit', function (e) {
    e.preventDefault();
    const in_text = input.value;
    list.innerHTML += `<div class="list">
        <div class="item">${in_text}</div>
        <i class="fa-solid fa-check"></i>
        <i class="fa-solid fa-xmark"></i>
    </div>`

    input.value = '';
});

// delet uchun holat
del_btn.addEventListener('click', function (e) {
    e.preventDefault();
    input.value = '';
    console.log("del_btn");
});

// enter uchun holat
input.addEventListener('keyup', function (e) {
    e.preventDefault();
    const in_text = input.value;
    if (e.keyCode === 13) {
        list.innerHTML += `<div class="list">
        <div class="item">${in_text}</div>
        <i class="fa-solid fa-check"></i>
        <i class="fa-solid fa-xmark"></i>
    </div>`

    input.value = '';
    }
});
