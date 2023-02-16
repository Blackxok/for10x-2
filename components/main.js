const todo = document.querySelector('#todo');
const input = document.querySelector('.form_input');
const add_btn = document.querySelector('.add_b');
const del_btn = document.querySelector('.clear_b');
const list = document.querySelector('.top_l');
const ico = document.querySelector('#ico');
const lines_icon = document.querySelector('.lines');
const file_icon = document.querySelector('.file');
const chek = document.querySelector('.fa-check');



// multiple events
['submit', 'keyup', 'click'].forEach(function (events) {
    todo.addEventListener(events, function (e) {
        e.preventDefault();

        // list length ---------------------------------------
        if (list.children.length > 3) {
            lines_icon.style.display = "block";
            file_icon.style.display = "none";
            console.log(list.children);
        } else if (list.children.length == 3) {
            lines_icon.style.display = "none";
            file_icon.style.display = "block";
        }
        // -------------------------------------------
        const in_text = input.value;
        if (e.keyCode === 13 || e.target.className === 'add_b') {
            list.innerHTML += `<div class="list">
            <div class="item">${in_text}</div>
            <button class="don" data-action="done">don</button>
            <button class="del" data-action="delete">del</button>
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


// check or delete missions
list.addEventListener('click', function (e) {
    if (e.target.dataset.action === 'delete') {
        const mission = e.target.closest('.list');
        mission.remove();
    }
});

    // /-------------------------------------------------------