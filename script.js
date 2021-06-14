class List {

    //class fields
    constructor(todoList, addBtn, warning, ul) {
        this.todoList = todoList;
        this.addBtn = addBtn;
        this.warning = warning
        this.ul = ul;
        this.items = [];
        this.clearBtn = document.createElement('button');
        
    }

    renderAddtodo = function () {
        this.addBtn.addEventListener('click', (e) => {
            e.preventDefault();

            //declare as a properties of this object
            let delBtn = document.createElement('button');
            //add class to delBtn
            delBtn.className = 'delete'
            let checkBtn = document.createElement('button');
            checkBtn.className = 'delete'
            let li = document.createElement('li');

            //get rid of white space
            this.todoList.value = list.value.trim();
            if (this.todoList.value === '') {
                this.warning.innerHTML = "Please enter your to do list";
                this.warning.style.color = "red";
            } else {
                this.warning.innerHTML = "";
                this.items.push(this.todoList.value);

                li.className = "details"
                li.classList.add('fadeInOpacity');
                delBtn.innerHTML = `<i class="far fa-trash-alt bin"></i>`;
                checkBtn.innerHTML = `<i class="far fa-check-circle"></i>`;
                li.innerHTML = `<span class="text">${this.items[this.items.length - 1]} </span>`;

                //append the text and icons
                this.ul.appendChild(li);
                li.appendChild(delBtn);
                li.appendChild(checkBtn);

                this.todoList.innerHTML = '';

                //deleteItem function 
                delBtn.addEventListener('click', function (e){
                    let parents = delBtn.parentElement;
                    parents.remove();                    
                });

                //completeItem function
                checkBtn.addEventListener('click', (e) => {
                  li.classList.toggle('checked');
                })

                //clear all button
                this.clearBtn.innerHTML = "Clear All"
                this.ul.appendChild(this.clearBtn);
                this.clearBtn.classList.add('clearBtn');
                this.clearBtn.addEventListener('click', (e) => {
                    this.ul.remove();
                    window.location.reload();
                })


            }

            this.todoList.value = '';
        })
    }

}

const todoList = document.querySelector("#list");
const add = document.querySelector('#btn');
const warning = document.querySelector('.warning');
const ul = document.querySelector('#addList');


let newPush = new List(todoList, add, warning, ul);
console.log(newPush.renderAddtodo());


