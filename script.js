class List {

    //class fields
    constructor(todoList, addBtn, warning, ul) {
        this.todoList = todoList;
        this.addBtn = addBtn;
        this.warning = warning
        this.ul = ul;
        this.items = [];
    }

    //make an li element
    static createListItem(text) {
        const li = document.createElement('li');
        li.classList.add('details');
        li.classList.add('fadeInOpacity');
        li.innerHTML = `<span class="text">${text} </span>`;

        li.appendChild(List.createDeleteButton());

        return li;
    }

    static createDeleteButton(){
        let delBtn = document.createElement('button');
        delBtn.classList.add('delete');

        return delBtn;
    }

    updateItem(text) {
        this.ul.appendChild(List.createListItem(text));
    }

    addItem() {
        this.addBtn.addEventListener('click', () => {

            //trim to get rid of the white space
            this.todoList.value = list.value.trim();

            if (this.todoList.value === '') {
                this.warning.innerHTML = "Please enter your to do list";
                this.warning.style.color = "red";
            } else {
                this.warning.innerHTML = "";
                this.items.push(this.todoList.value);

                //update last item of the array
                this.updateItem(this.items[this.items.length - 1]);
            }

        })

    }

    remove(index) {
        this.items.splice(index, 1);
        this.updateItem; h
    }

    removeAll() {

    }

}



const todoList = document.querySelector("#list");
const add = document.querySelector('#btn');
const warning = document.querySelector('.warning');
const ul = document.querySelector('#addList');


let newPush = new List(todoList, add, warning, ul);
console.log(newPush.addItem());

