const todo = document.querySelector('#todo');
const input = document.querySelector('.form_input');
const add_btn = document.querySelector('.add_b');
const del_btn = document.querySelector('.clear_b');
const list = document.querySelector('.top_l');
const ico = document.querySelector('#ico');
const lines_icon = document.querySelector('.lines');
const file_icon = document.querySelector('.file');


// multiple events
['submit', 'keyup', 'click'].forEach(function (events) {
    todo.addEventListener(events, function (e) {
        e.preventDefault();

        // list length ---------------------------------------

        if (list.children.length > 1) {
            console.log("katta");
            lines_icon.style.display = "block";
            file_icon.style.display = "none";
        } else {
            console.log("mayda");
        }
        console.log("working");
        console.log(ico);
        console.log(list.children.length);


        // -------------------------------------------



        const in_text = input.value;
        if (e.keyCode === 13 || e.target.className === 'add_b') {
            list.innerHTML += `<div class="list">
                <div class="item">${in_text}</div>
                <i class="fa-solid fa-check"></i>
                <i class="fa-solid fa-xmark"></i>
                </div>`
            input.value = '';
            input.focus();
        } else if (e.target.className === 'clear_b') {
            input.value = input.value.toString().slice(0, -1);
        } else {
            return;
        };
    });
});

// empty or full list





