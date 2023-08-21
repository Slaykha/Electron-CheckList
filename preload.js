window.addEventListener("DOMContentLoaded", () => {
    let loc = location.href.split("/").pop();
    if(loc === "index.html"){
 
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
    
    }else if(loc === "checkList.html"){
        let header = document.createElement("header");

        let h1 = document.createElement("h1");
        h1.innerText = "CheckList";

        let headerDiv = document.createElement("div");
        headerDiv.id = "header-div";

        let input = document.createElement("input");
        input.id = "header-input";
        input.type = "text";
        input.name = "checkItem";
        input.placeholder = "Please Enter an Item...";

        let button = document.createElement("button");
        button.id = "create-input";
        button.innerText = "Add To List"

        let list = document.createElement("div");
        list.id = "list";

        headerDiv.append(input, button);
        header.append(h1, headerDiv);
    
        document.body.append(header, list);
    };

    /*
    <header>
        <h1>CheckList</h1>
        <div id="header-div">
            <input id="header-input" type="text" id="checkItem" name="checkItem" placeholder="Please Enter an Item...">
            <button id="create-button">Add to List</button>
        </div>
    </header>
    */
});

