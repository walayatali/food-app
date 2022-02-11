import React,{ useReducer } from 'react';

const CartContext = React.createContext({
	items: [],
	totalAmount: 0,
	addItem: (item) => {},
	removeItem: (id) => {}
});


const defaultCartState = {
  items: [],
  totalAmount: 0
};

const cartReducer = (state, action) => {
	let updatedItems;
	
	if(action.type == 'ADD')
	{
		const existingItemIndex = state.items.findIndex((item) =>  (item.id === action.item.id) );
		const existingCartItem = state.items[existingItemIndex];
		if (existingCartItem) {
			
			const updatedCartItem = {
				...existingCartItem,
				amount: existingCartItem.amount + action.item.amount,
			}
			updatedItems = [...state.items];
			updatedItems[existingItemIndex] = updatedCartItem;
		}else{
			updatedItems = state.items.concat(action.item);
		}
	    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
	    return {
	      items: updatedItems,
	      totalAmount: updatedTotalAmount
	    };
	}
	if (action.type == 'REMOVE') {
		const existingItemIndex = state.items.findIndex((item) =>  (item.id === action.id) );
		const existingCartItem = state.items[existingItemIndex];
		const updatedTotalAmount = state.totalAmount - existingCartItem.price;

		if (existingCartItem.amount === 1) {
			updatedItems = state.items.filter((item)=> (item.id !== action.id)) 
		}else{
			const updatedItem = {...existingCartItem, amount: existingCartItem.amount - 1};
			updatedItems = [...state.items];
			updatedItems[existingItemIndex] = updatedItem;
		}
		return {
			items: updatedItems,
			totalAmount: updatedTotalAmount
		}

	}
	return defaultCartState;
}

export const CartContextProvider  = (props) => {

const addItemHandler = (item) => {
	 dispatchCartAction({type: 'ADD', item: item});
}

const removeItemHandler = (id) => {
	dispatchCartAction({type: 'REMOVE', id: id})
}

const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);
	
const cartContext = {
		items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
}
	return(
		<CartContext.Provider value={cartContext}>
			{props.children}
		</CartContext.Provider>
	)
}

export default CartContext;