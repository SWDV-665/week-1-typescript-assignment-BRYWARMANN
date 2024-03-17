var Grocery = /** @class */ (function () {
    function Grocery(id, name, quantity) {
        this.id = id;
        this.name = name;
        this.quantity = quantity;
    }
    return Grocery;
}());
var groceryItems = [
    { id: 1, name: "milk", quantity: 3 }
];
function addGroceryItem(id, name, quantity) {
    var newItem = new Grocery(id, name, quantity);
    groceryItems.push(newItem);
}
function displayGrocery() {
    var list = document.getElementById("list");
    groceryItems.forEach(function (item) {
        var li = document.createElement("li");
        li.innerText = "ID: " + item.id + ", Name: " + item.name + ", Quantity: " + item.quantity;
        list.appendChild(li);
    });
}
addGroceryItem(2, "bread", 3);
addGroceryItem(3, "eggs", 6);
addGroceryItem(4, "orange juice", 1);
displayGrocery();
