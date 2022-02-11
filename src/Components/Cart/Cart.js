import React,{ useContext } from 'react';
import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import CartItem from './CartItem';
import CartContext from '../../Store/CartContext';

function Cart(props)	{
  const ctxCart = useContext(CartContext);
	const items = ctxCart.items;
  const hasItems = items.length > 0;
  const totalAmount = ctxCart.totalAmount.toFixed(2);
  
  const onAddItemHandler = (item) => {
    ctxCart.addItem({...item, amount:1})    
  }
  const onRemoveItemHandler = (id) => {
    ctxCart.removeItem(id);        
  }


  const cartItems = (
    <ul className={classes['cart-items']}>
      {items.map((item) => (
        <CartItem key={item.id} name={item.name} 
        onAdd={onAddItemHandler.bind(onAddItemHandler, item)} onRemove={onRemoveItemHandler.bind(onRemoveItemHandler, item.id)}
        price={item.price} amount={item.amount} description={item.description}/>
      ))}
    </ul>
  );  
	return ( 
		<Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount} $</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
	)
}

export default Cart;