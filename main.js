let items = [];

// CREATE
function create(item) {
    items.push(item);
    console.log("Created:", item);
}

// READ
function read(index) {
    console.log("Read:", items[index] || "Invalid index");
}

// UPDATE
function update(index, newItem) {
    if (items[index]) {
        console.log("Updated:", items[index], "->", newItem);
        items[index] = newItem;
    } else {
        console.log("Invalid index");
    }
}

// DELETE
function deleteItem(index) {
    if (items[index]) {
        console.log("Deleted:", items[index]);
        items.splice(index, 1);
    } else {
        console.log("Invalid index");
    }
}

// Misollar
create("Apple");
create("Banana");
read(0);
update(1, "Orange");
deleteItem(0);

console.log("Final items:", items);