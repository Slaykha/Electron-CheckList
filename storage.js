const Store = require("electron-store");

const store = new Store();

export const createNewChekListItem = (item) => {
    store.set(item.id, item);
};

export const getCheckListItems = () => {
    let items = store.store;

    return items;
};

export const getListItemId = () => {
    let size = store.size

    return (size + 1).toString()
}