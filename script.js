
class List {
    add = document.querySelector('#btn');
    ul = document.querySelector('#addList');
    clearBtn = document.createElement('button');
    items = [];

    addItems = function () {
        this.add.addEventListener('click', (e) => {
            e.preventDefault();

            let list = document.querySelector("#list");
            let warning = document.querySelector('.warning');
            list.value = list.value.trim();
            if (list.value === '' ){
                warning.innerHTML = "Please enter your to do list";
                warning.style.color = "red";
            } else {
                
                let delBtn = document.createElement('button');
                let checkBtn = document.createElement('button');
                let li = document.createElement('li');

                warning.innerHTML = "";
                this.items.push(list.value);

                li.className = "details"
                li.classList.add('fadeInOpacity');
                delBtn.innerHTML = `<i class="far fa-trash-alt bin"></i>`;
                checkBtn.innerHTML = `<i class="far fa-check-circle"></i>`;
                li.innerHTML = `<span class="text">${this.items[this.items.length - 1]} </span>`;

                //add styling classes both delBtn and checkedBtn
                delBtn.classList.add('btn-del');
                checkBtn.classList.add('btn-del');

                //append the text and icons
                this.ul.appendChild(li);
                li.appendChild(delBtn);
                li.appendChild(checkBtn);

                
                //deleteItem function 
                delBtn.addEventListener('click', () => {
                    let parent = delBtn.parentNode;
 
                    // if ul has a child left at 2 elements
                    //delete li and clear button
                     if(this.ul.childElementCount === 2){
                         parent.remove();
                         this.clearBtn.remove();
                     }else {
                         parent.remove();
                     }
                    
                 });


                //completeItem function
                checkBtn.addEventListener('click', (e) => {
                  li.classList.add('checked');
                });


                //clear all button
                this.clearBtn.innerHTML = "Clear All"
                this.ul.appendChild(this.clearBtn);
                this.clearBtn.classList.add('clearBtn');
                this.clearBtn.addEventListener('click', (e) => {
                    this.ul.remove();
                    window.location.reload();
                })

            }

            list.value = '';

        })
    }

}

let newPush = new List();
console.log(newPush.addItems());











