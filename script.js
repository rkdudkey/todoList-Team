
class List {
    list = document.querySelector("#list");
    add = document.querySelector('#btn');
    warning = document.querySelector('.warning');
    ul = document.querySelector('#addList');
    items = [];

    //not sure why i cannot grab elements of span text in li
    bin = document.querySelector('span.text');

    addItems = function () {
        this.add.addEventListener('click', (e) => {
            console.log(this.bin);
            e.preventDefault();
            if (this.list.value === '') {
                this.warning.innerHTML = "Please enter your to do list";
                this.warning.style.color = "red";
            } else {
                this.warning.innerHTML = "";
                this.items.push( this.list.value);

                //create the li element
                let li = document.createElement('li');
                li.className = "details"
                li.classList.add('fadeInOpacity');
                li.innerHTML = `<span class="text">${this.items[this.items.length-1]} </span>`;

                //append the list
                this.ul.appendChild(li);
                this.list.innerHTML = "";
                
            }

            this.list.value =" ";

        })
    }

    deleteItem = function () { 
       
        

       /*this.bin.addEventListener('click', (e) => {
            let target = e.target;
            target.classList.remove('fadeInOpacity');
            target.classList.add('fadeOutOpacity');

            setInterval(() => {
                target.innerHTML="";
                target.classList.remove('details');
            }, 1000);

        })*/

    }

    completedItem = function () {
        let text=document.querySelector(".text");
         text.addEventListener('click', (e) => {
            let target = e.target;
            target.classList.add('checked');
        })
        
    }

   

}




let newPush = new List();
console.log(newPush.addItems());
console.log(newPush.deleteItem());







