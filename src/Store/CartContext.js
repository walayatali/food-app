import React from 'react';

const CartContext = React.createContext({
	items: [],
	totalAmount: 0,
	addItem: (item) => {},
	removeItem: (id) => {}
});

const addItemHandler = () => {

}

const removeItemHandler = (id) => {
	
}

const cartContext = {
	items: [],
	totalAmount: 0,
	addItem: addItemHandler,
	removeItem:  removeItemHandler
}

export const CartContextProvider  = (props) => {
	return(
		<CartContext.Provider value={cartContext}>
			{props.children}
		</CartContext.Provider>
	)
}

export default CartContext;