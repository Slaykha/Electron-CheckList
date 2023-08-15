import { createNewChekListItem, getCheckListItems, getListItemId } from "./storage.js";

const createButton = document.getElementById("create-button");

const listArr = [];

createButton.addEventListener("click", () => {
    let input = document.getElementById("header-input");

    if(input.value != ""){
        let newItem = {id: getListItemId(), name: input.value, checked: false};
         console.log(newItem)

        createNewChekListItem(newItem);
        listArr.push(newItem);
        addNewItemToDOM(newItem);
        input.value = "";
    }
});

const addNewItemToDOM = (item) => {
    let listDiv = document.createElement("div");
    let itemName = document.createElement("p");
    let itemCheckBox = document.createElement("input");
    
    listDiv.className = "checkList";
    listDiv.id = `checkList-${item.id}`;
    if (item.checked) listDiv.style.backgroundColor = "green";

    itemName.id = `itemName-${item.id}`;
    itemName.className = "item";
    itemName.innerText = item.name;

    itemCheckBox.type = "checkbox";
    itemCheckBox.className = "item-check-box";
    itemCheckBox.id = `checkBox-${item.id}`;
    itemCheckBox.checked = item.checked

    listDiv.append(itemName, itemCheckBox);
    document.getElementById("list").appendChild(listDiv);
};

document.body.addEventListener( "click", event => {
    let idSplit = event.target.id.split("-");
    if(idSplit[0] == "checkBox") {
        let id = idSplit[1];
        let checked = document.getElementById(event.target.id).checked;
        let checkList = document.getElementById(`checkList-${id}`);
        let color = "#272829";

        if (checked) color = "green";

        checkList.style.backgroundColor = color;
    };
});

window.addEventListener("DOMContentLoaded", () => {
    let items = getCheckListItems();

    for (let key in items) {
        addNewItemToDOM(items[key]);
    };
});