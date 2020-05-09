function Order() {
    // this.items = [];
}

Order.prototype.checkItems = function(item) {
    if(items.length === 0) {
        items.push(item)
    } else {
    // items.forEach(element => {
    if(items.every(element => element.name !== item.name)) {
        items.push(item)
        } else {
            items.forEach(el => {
                if(el.name===item.name){
                    el.count += item.count;
                    el.calorie+=item.calorie;
                    el.price+=item.price
                    }})
        }
    }
    ui.addItemToTable()
    console.log(items)
}


