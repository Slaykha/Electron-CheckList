const Store = require("electron-store");

const store = new Store();

export const createMainListItem = (item) => {
    store.set(item.id, item);
};

export const getCheckListItems = () => {
    let items = store.store;

    return items;
};

export const getMainListItemId = () => {
    let size = store.size;

    return (size + 1).toString();
};

export const deleteListItem = (key) => {
    store.delete(key);
};

export const getSingleCheckList = (id) => {
    let item = store.get(id);

    return item;
}