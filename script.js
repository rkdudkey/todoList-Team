
class List {
    list = document.querySelector("#list");
    add = document.querySelector('#btn');
    warning = document.querySelector('.warning');
    ul = document.querySelector('#addList');
    items = [];

    addItems = function () {
        this.add.addEventListener('click', (e) => {
            e.preventDefault();

            let delBtn = document.createElement('button');
            let checkBtn = document.createElement('button');
            let li = document.createElement('li');

            if (this.list.value === '') {
                this.warning.innerHTML = "Please enter your to do list";
                this.warning.style.color = "red";
            } else {
                this.warning.innerHTML = "";
                this.items.push(this.list.value);

                li.className = "details"
                li.classList.add('fadeInOpacity');
                delBtn.innerHTML = `<i class="far fa-trash-alt bin"></i>`;
                checkBtn.innerHTML = `<i class="far fa-check-circle"></i>`;
                li.innerHTML = `<span class="text">${this.items[this.items.length - 1]} </span>`;

                //append the text and icons
                this.ul.appendChild(li);
                li.appendChild(delBtn);
                li.appendChild(checkBtn);

                this.list.innerHTML = "";

                //deleteItem function 
                delBtn.addEventListener('click', (e) => {
                   
                });
                //completeItem function
                checkBtn.addEventListener('click', (e) => {
                  li.classList.add('checked');
                });

            }

            this.list.value = " ";

        })
    }

}

let newPush = new List();
console.log(newPush.addItems());










