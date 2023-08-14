const createButton = document.getElementById("create-button");

createButton.addEventListener("click", () => {
    let input = document.getElementById("header-input");

    if(input.value != ""){
        addNewItemToList(input.value);
        input.value = "";
    }
})

const addNewItemToList = (itemValue) => {
    let listDiv = document.createElement("div");
    let item = document.createElement("p");
    let itemCheckBox = document.createElement("input")
    itemCheckBox.type = "checkbox"
    itemCheckBox.className = "item-check-box"

    listDiv.id = "checkList"
    item.className = "item"
    item.innerText = itemValue;

    listDiv.append(item, itemCheckBox);
    document.getElementById("list").appendChild(listDiv);
}