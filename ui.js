// UI constructor
function UI(){}

//Add Item to table
UI.prototype.addItemToTable = function (item) {
    var table = document.getElementById('table');
    //Create TR
    var tr = document.createElement('tr');
        tdName = document.createElement('td')
        tdCount = document.createElement('td')
        tdCalorie = document.createElement('td')
        tdPrice = document.createElement('td');
        tdDel =  document.createElement('td');
        btn = document.createElement('button');
        btn.className = 'close text-danger';
        tdDel.appendChild(btn)
        tdName.innerHTML = item.name;
        tdCount.innerHTML = item.count;
        tdCalorie.innerHTML= item.calorie;
        tdPrice.innerHTML= item.price;

    tr.appendChild(tdName)
    tr.appendChild(tdCount)
    tr.appendChild(tdCalorie)
    tr.appendChild(tdPrice)
    tr.appendChild(tdDel)
    console.log(tr) 
    table.appendChild(tr)
}


//Delete Item 
UI.prototype.deleteItem = function(target) {
    console.log(target.className)
    if(target.className === 'close text-danger') {
        console.log(target)
        target.parentElement.parentElement.remove()
    }
}

UI.prototype.showAlert = function(message) {
    if(!document.querySelector('.alert')) {
        div = document.createElement('div');
        div.className = 'alert alert-dismissible alert-danger mt-2';
        div.innerHTML=message;
        document.getElementById('add-brg').before(div)
            setTimeout(() => {
             div.remove();
            }, 2000);
    } else {
        return null
    } 
}