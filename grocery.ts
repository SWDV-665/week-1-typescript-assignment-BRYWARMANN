class Grocery {
    id: number;
    name: string;
    quantity: number;

    constructor (id:number, name:string, quantity:number) {
        this.id = id;
        this.name = name;
        this.quantity = quantity;

    }
}

var groceryItems = [
    {id : 1, name: "milk", quantity: 3}
  ];

function addGroceryItem(id:number, name:string, quantity:number) {
    var newItem = new Grocery(id, name, quantity);
    groceryItems.push(newItem);
}

function displayGrocery() {
    let list = <HTMLElement>document.getElementById("list");

    groceryItems.forEach((item) => {
    let li = document.createElement("li");
    li.innerText = "ID: " + item.id + ", Name: " + item.name + ", Quantity: " + item.quantity;
    list.appendChild(li);
});  
}

addGroceryItem(2, "bread", 3);
addGroceryItem(3, "eggs", 6);
addGroceryItem(4, "orange juice", 1);

displayGrocery();