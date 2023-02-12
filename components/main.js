const btns = document.querySelector('#button_s');
const input = document.querySelector('.form_input');
const add_btn = document.querySelector('.add_b');
const del_btn = document.querySelector('.clear_b');

// submit uchun holat
btns.addEventListener('submit', function (e) {
    e.preventDefault();
    const in_text = input.value;
    console.log(in_text);
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
    if (e.keyCode === 13) {
        console.log(input.value);
    }
});