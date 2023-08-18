window.addEventListener("DOMContentLoaded", () => {
    let mainList = document.createElement("div");
    mainList.id = "mainList";

    document.body.appendChild(mainList);

    let addMainListItem = document.createElement("div");
    addMainListItem.id = "addMainListItem";

    mainList.appendChild(addMainListItem);

    let circle = document.createElement("div");
    circle.className = "circle";
    circle.innerText = "+";

    addMainListItem.appendChild(circle);


    /*
    let list = document.createElement("div");
    list.id = "list";

    document.body.appendChild(list);
    */
});

