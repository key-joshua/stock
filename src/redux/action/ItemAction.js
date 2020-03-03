import { viewItems, addItem, removeItems } from '../type/ItemType';



export const viewStore = () => {
    return { 
        type: viewItems
    };
};export const insertIntoStore = (newItem) => {


    return { 
        type: addItem,
        newItem
    };
};

export const deleteItem = (id) => {
    return { 
        type: removeItems,
        itemId: id

    };
};

