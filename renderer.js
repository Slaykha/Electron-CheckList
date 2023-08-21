import { createMainListItem, deleteListItem, getCheckListItems, getMainListItemId } from "./storage.js";

let createButton = document.getElementById("create-button");
let mainList = document.getElementById("mainList");
let addMainListItem = document.getElementById("addMainListItem");

const listArr = [];

/*
createButton.addEventListener("click", () => {
    let input = document.getElementById("header-input");

    if(input.value != ""){
        let newItem = {id: getListItemId(), name: input.value, checked: false};

        createNewChekListItem(newItem);
        listArr.push(newItem);
        addNewListItemToDOM(newItem);
        input.value = "";
    }
});
*/

const addNewListItemToDOM = (item) => {
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

const addNewMainListItemToDOM = (item) => {
    console.log(item)
    let mainListItem = document.createElement("div");
    mainListItem.id = `mainListItem-${item.id}`;
    mainListItem.className = "mainListItem";
    mainListItem.innerText = item.text;

    mainList.appendChild(mainListItem);
}

document.body.addEventListener( "click", event => {
    let idSplit = event.target.id.split("-");

    if(idSplit[0] == "mainListItem"){
        location.href="./checkList.html";
    }

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
    mainList = document.getElementById("mainList");
    addMainListItem = document.getElementById("addMainListItem");

    addMainListItem.addEventListener("click", () => {
        let newMainItem = {id: getMainListItemId(), text: "text", checkList:{}};
    
        createMainListItem(newMainItem);
        addNewMainListItemToDOM(newMainItem);
    });

    let items = getCheckListItems();

    for (let key in items) {
        addNewMainListItemToDOM(items[key]);
    };
    
});
