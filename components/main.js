const todo = document.querySelector('#todo');
const input = document.querySelector('.form_input');
const add_btn = document.querySelector('.add_b');
const del_btn = document.querySelector('.clear_b');
const list = document.querySelector('.top_l');
const ico = document.querySelector('#ico');
const lines_icon = document.querySelector('.lines');
const file_icon = document.querySelector('.file');
const chek = document.querySelector('.fa-check');
// done btn
const done_click = document.querySelector('.don');
// item text in list
// const item_text = document.querySelector('.item');


// multiple events
['submit', 'keyup', 'click'].forEach(function (events) {
    todo.addEventListener(events, function (e) {
        e.preventDefault();

        // list length ---------------------------------------
        if (list.children.length > 3) {
            lines_icon.style.display = "block";
            file_icon.style.display = "none";
        } else if (list.children.length === 3) {
            lines_icon.style.display = "none";
            file_icon.style.display = "block";
        }
        // -------------------------------------------
        const in_text = input.value;
        if (e.keyCode === 13 || e.target.className === 'add_b') {
            if (in_text.length > 0) {
                list.innerHTML += `<div class="list">
                <div class="item">${in_text}</div>
                <button class="edit" data-action="edit"></button>
                <button class="don" data-action="done"></button>
                <button class="del" data-action="delete"></button>
                </div>`
            }
            input.value = '';
            input.focus();
        } else if (e.target.className === 'clear_b') {
            input.value = input.value.toString().slice(0, -1);
        } else {
            return;
        };
    });
});


// check or delete missions
list.addEventListener('click', function (e) {
    if (e.target.dataset.action === 'delete') {
        const mission = e.target.closest('.list');
        mission.remove();
    } else if (e.target.dataset.action === 'done') {
        const list_item = e.target.closest('.list').querySelector('.item');
        list_item.classList.add("don_line")
        list_item.style.color = "darkgray";
    } else if (e.target.dataset.action === 'edit') {
        const mission = e.target.closest('.list');
        mission.remove();
        // this item changing
        const item_text = e.target.closest('.list').querySelector('.item');
        input.value = item_text.innerHTML
        input.focus();
    }
});

    // /-------------------------------------------------------