import { addItem, removeItems } from '../type/ItemType'
        const initState = {

            items: [
                { id: 1, name: "RAVA", price: "$123000" },
                { id: 2, name: "BENZ", price: "$266000" },
                { id: 3, name: "VOLS", price: "$444000" },
                { id: 4, name: "JEEP", price: "$563000" }
            ]
        }

        const rootReducer = (state = initState, action) =>{
            if(action.type === removeItems) {
                let remainItems = state.items.filter(item => {
                    return item.id !== action.itemId;
                  })
                  return {
                      ...state,
                      items: remainItems
                  }
            }

            if(action.type === addItem) {
                action.newItem.id = state.items.length + 1;
                let newItems = [...state.items, action.newItem];
                return {
                    ...state,
                    items: newItems
                }
            }
            return state;
        }


export default rootReducer;
