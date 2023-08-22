window.addEventListener("DOMContentLoaded", () => {
    let loc = location.href.split("/").pop().split("?")[0];
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
        let grid = document.createElement("div");
        grid.className = "grid";

        let sideMenu = document.createElement("div");
        sideMenu.className = "sideMenu";

        let header = document.createElement("div");
        header.className = "header"

        let h1 = document.createElement("h1");
        h1.id = "header-h1"
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

        grid.append(header, sideMenu)
    
        document.body.append(grid, list);
    };

    /*
        <div class="grid">
            <div class="sideMenu">
                deneme
            </div>
            <div class="header">
                <h1>CheckList</h1>
                <div id="header-div">
                    <input id="header-input" type="text" name="checkItem" placeholder="Please Enter an Item...">
                    <button id="create-button">Add to List</button>
                </div>
            </div>
        </div>
    */
});

